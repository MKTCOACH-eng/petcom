-- ============================================
-- PETCOM MVP - Initial Database Setup
-- ============================================

-- Crear tabla para suscripciones de email
CREATE TABLE IF NOT EXISTS email_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Añadir índices para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_email 
  ON email_subscriptions(email);
  
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_created_at 
  ON email_subscriptions(created_at DESC);

-- Habilitar Row Level Security
ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserts públicos
CREATE POLICY "Allow public insert" 
  ON email_subscriptions
  FOR INSERT
  WITH CHECK (true);

-- Política para permitir selects públicos
CREATE POLICY "Allow public select" 
  ON email_subscriptions
  FOR SELECT
  USING (true);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_email_subscriptions_updated_at
  BEFORE UPDATE ON email_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentarios para documentación
COMMENT ON TABLE email_subscriptions IS 'Almacena los emails de usuarios suscritos al newsletter de PETCOM';
COMMENT ON COLUMN email_subscriptions.id IS 'UUID único para cada suscripción';
COMMENT ON COLUMN email_subscriptions.email IS 'Email del suscriptor (único)';
COMMENT ON COLUMN email_subscriptions.created_at IS 'Fecha de suscripción';
COMMENT ON COLUMN email_subscriptions.updated_at IS 'Última actualización';
