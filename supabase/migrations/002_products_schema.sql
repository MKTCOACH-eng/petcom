-- ================================================
-- PETCOM Products Schema
-- Migration: 002_products_schema
-- Description: Tables for products, categories, and images
-- ================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ================================================
-- CATEGORIES TABLE
-- ================================================
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  species TEXT NOT NULL CHECK (species IN ('perros', 'gatos', 'pequenas', 'aves', 'peces')),
  parent_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  description TEXT,
  image_url TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_species ON categories(species);
CREATE INDEX idx_categories_parent ON categories(parent_id);
CREATE INDEX idx_categories_active ON categories(is_active);

-- ================================================
-- PRODUCTS TABLE
-- ================================================
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  short_description TEXT,
  price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
  compare_at_price DECIMAL(10, 2) CHECK (compare_at_price >= 0),
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  species TEXT NOT NULL CHECK (species IN ('perros', 'gatos', 'pequenas', 'aves', 'peces', 'todas')),
  
  -- Inventory
  stock INT DEFAULT 0 CHECK (stock >= 0),
  sku TEXT UNIQUE,
  
  -- Images
  image_url TEXT,
  images JSONB DEFAULT '[]',
  
  -- Product details
  brand TEXT,
  weight_kg DECIMAL(10, 2),
  tags TEXT[],
  
  -- SEO
  meta_title TEXT,
  meta_description TEXT,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_species ON products(species);
CREATE INDEX idx_products_active ON products(is_active);
CREATE INDEX idx_products_featured ON products(is_featured);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_products_tags ON products USING GIN(tags);

-- Full text search
ALTER TABLE products ADD COLUMN search_vector tsvector;
CREATE INDEX idx_products_search ON products USING GIN(search_vector);

CREATE OR REPLACE FUNCTION products_search_trigger() RETURNS trigger AS $$
BEGIN
  NEW.search_vector := to_tsvector('spanish', 
    COALESCE(NEW.name, '') || ' ' || 
    COALESCE(NEW.description, '') || ' ' || 
    COALESCE(NEW.brand, '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER products_search_update 
  BEFORE INSERT OR UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION products_search_trigger();

-- ================================================
-- PRODUCT IMAGES TABLE (For multiple images)
-- ================================================
CREATE TABLE product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_product_images_product ON product_images(product_id);

-- ================================================
-- UPDATE TIMESTAMPS FUNCTION
-- ================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to tables
CREATE TRIGGER categories_updated_at 
  BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER products_updated_at 
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ================================================
-- ROW LEVEL SECURITY (RLS)
-- ================================================

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public can view active categories" ON categories
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active products" ON products
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view product images" ON product_images
  FOR SELECT USING (true);

-- Admin write access (to be implemented with auth)
-- For now, allow all authenticated users to manage (will restrict later)
CREATE POLICY "Authenticated users can manage categories" ON categories
  FOR ALL USING (true);

CREATE POLICY "Authenticated users can manage products" ON products
  FOR ALL USING (true);

CREATE POLICY "Authenticated users can manage images" ON product_images
  FOR ALL USING (true);

-- ================================================
-- SEED DATA: CATEGORIES
-- ================================================

-- Perros - Main category
INSERT INTO categories (name, slug, species, description) VALUES
('Perros', 'perros', 'perros', 'Productos para perros');

-- Perros - Subcategories
INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Alimento Seco', 'alimento-seco', 'perros', id, 1 FROM categories WHERE slug = 'perros';

INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Alimento Húmedo', 'alimento-humedo', 'perros', id, 2 FROM categories WHERE slug = 'perros';

INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Premios & Snacks', 'premios-snacks', 'perros', id, 3 FROM categories WHERE slug = 'perros';

INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Juguetes', 'juguetes', 'perros', id, 4 FROM categories WHERE slug = 'perros';

INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Accesorios', 'accesorios', 'perros', id, 5 FROM categories WHERE slug = 'perros';

-- Gatos - Main category
INSERT INTO categories (name, slug, species, description) VALUES
('Gatos', 'gatos', 'gatos', 'Productos para gatos');

-- Gatos - Subcategories
INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Alimento Seco', 'alimento-seco-gatos', 'gatos', id, 1 FROM categories WHERE slug = 'gatos';

INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Alimento Húmedo', 'alimento-humedo-gatos', 'gatos', id, 2 FROM categories WHERE slug = 'gatos';

INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Arena & Higiene', 'arena-higiene', 'gatos', id, 3 FROM categories WHERE slug = 'gatos';

INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Juguetes', 'juguetes-gatos', 'gatos', id, 4 FROM categories WHERE slug = 'gatos';

INSERT INTO categories (name, slug, species, parent_id, display_order) 
SELECT 'Rascadores', 'rascadores', 'gatos', id, 5 FROM categories WHERE slug = 'gatos';

-- ================================================
-- SEED DATA: SAMPLE PRODUCTS
-- ================================================

-- Perros - Alimento
INSERT INTO products (
  name, slug, description, short_description, price, compare_at_price,
  species, brand, stock, image_url, is_featured, tags
) VALUES
(
  'Alimento Premium para Perros Adultos 15kg',
  'alimento-premium-perros-adultos-15kg',
  'Alimento completo y balanceado para perros adultos de todas las razas. Formulado con ingredientes naturales de alta calidad, proteínas de pollo real y cereales integrales. Enriquecido con vitaminas y minerales esenciales para una salud óptima.',
  'Alimento balanceado con proteínas de pollo real',
  899.00,
  1099.00,
  'perros',
  'Premium Pet',
  50,
  'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800',
  true,
  ARRAY['alimento', 'premium', 'adultos']
),
(
  'Croquetas para Cachorros Raza Grande 10kg',
  'croquetas-cachorros-raza-grande-10kg',
  'Nutrición especializada para cachorros de razas grandes. Rico en DHA para el desarrollo cerebral y visual. Calcio y fósforo balanceados para huesos y articulaciones fuertes.',
  'Nutrición especializada para cachorros grandes',
  749.00,
  NULL,
  'perros',
  'Puppy Pro',
  30,
  'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800',
  true,
  ARRAY['cachorro', 'raza-grande']
);

-- Perros - Juguetes
INSERT INTO products (
  name, slug, description, short_description, price, stock, species, brand, image_url, tags
) VALUES
(
  'Pelota de Goma Interactiva',
  'pelota-goma-interactiva',
  'Pelota resistente de goma natural que rebota de forma impredecible. Perfecta para ejercitar a tu perro y mantenerlo entretenido. Textura que ayuda a limpiar dientes.',
  'Pelota resistente que rebota',
  149.00,
  100,
  'perros',
  'PlayPet',
  'https://images.unsplash.com/photo-1535586437-efec94057bfa?w=800',
  ARRAY['juguete', 'ejercicio']
),
(
  'Cuerda para Morder XL',
  'cuerda-morder-xl',
  'Cuerda de algodón trenzado extra resistente. Ideal para juegos de tira y afloja. Ayuda a mantener dientes limpios y encías saludables.',
  'Cuerda resistente para jugar',
  199.00,
  75,
  'perros',
  'PlayPet',
  'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800',
  ARRAY['juguete', 'dental']
);

-- Gatos - Alimento
INSERT INTO products (
  name, slug, description, short_description, price, stock, species, brand, image_url, is_featured, tags
) VALUES
(
  'Alimento Premium para Gatos Adultos 7.5kg',
  'alimento-premium-gatos-adultos-75kg',
  'Nutrición completa para gatos adultos. Rico en proteínas de pescado y pollo. Incluye taurina para la salud cardíaca y visual. pH balanceado para salud urinaria.',
  'Nutrición completa con pescado y pollo',
  699.00,
  40,
  'gatos',
  'Feline Premium',
  'https://images.unsplash.com/photo-1575859431774-2e57ed632664?w=800',
  true,
  ARRAY['alimento', 'premium', 'adultos']
),
(
  'Comida Húmeda Sabor Salmón Pack 12 Latas',
  'comida-humeda-salmon-pack-12',
  'Pack de 12 latas de 85g cada una. Trozos de salmón real en salsa. Alto contenido de humedad para hidratación. Sin colorantes ni conservadores artificiales.',
  'Trozos de salmón real en salsa',
  349.00,
  60,
  'gatos',
  'Feline Gourmet',
  'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=800',
  false,
  ARRAY['comida-humeda', 'salmon']
);

-- Gatos - Arena
INSERT INTO products (
  name, slug, description, short_description, price, compare_at_price, stock, species, brand, image_url, is_featured, tags
) VALUES
(
  'Arena Aglutinante Premium 10kg',
  'arena-aglutinante-premium-10kg',
  'Arena de bentonita 100% natural. Aglutinante instantánea para fácil limpieza. Control de olores de larga duración. Ultra absorbente. Baja generación de polvo.',
  'Arena natural ultra absorbente',
  279.00,
  329.00,
  80,
  'gatos',
  'CleanCat',
  'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800',
  true,
  ARRAY['arena', 'control-olores']
);

-- Gatos - Juguetes
INSERT INTO products (
  name, slug, description, short_description, price, stock, species, brand, image_url, tags
) VALUES
(
  'Ratón de Juguete con Hierba Gatera',
  'raton-juguete-hierba-gatera',
  'Ratón de felpa suave relleno de hierba gatera natural. Estimula el juego y ejercicio. Tamaño perfecto para cazar y transportar.',
  'Ratón con hierba gatera natural',
  89.00,
  120,
  'gatos',
  'FelinePlay',
  'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800',
  ARRAY['juguete', 'hierba-gatera']
),
(
  'Túnel de Juego Plegable',
  'tunel-juego-plegable',
  'Túnel de juego de 120cm de largo. Material resistente y lavable. Se plegable para fácil almacenamiento. Perfecto para esconderse y jugar.',
  'Túnel de 120cm plegable',
  399.00,
  45,
  'gatos',
  'FelinePlay',
  'https://images.unsplash.com/photo-1511694009171-3cdddf4484ff?w=800',
  ARRAY['juguete', 'tunel']
);

-- ================================================
-- VIEWS FOR EASIER QUERIES
-- ================================================

-- Products with category info
CREATE VIEW products_with_category AS
SELECT 
  p.*,
  c.name as category_name,
  c.slug as category_slug
FROM products p
LEFT JOIN categories c ON p.category_id = c.id;

-- Featured products
CREATE VIEW featured_products AS
SELECT * FROM products
WHERE is_featured = true AND is_active = true
ORDER BY created_at DESC;

-- Products in stock
CREATE VIEW products_in_stock AS
SELECT * FROM products
WHERE stock > 0 AND is_active = true;

COMMENT ON TABLE products IS 'Main products table for PETCOM e-commerce';
COMMENT ON TABLE categories IS 'Product categories organized by pet species';
COMMENT ON TABLE product_images IS 'Additional product images for gallery';
