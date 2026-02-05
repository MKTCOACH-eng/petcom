'use client';

import Link from 'next/link';

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

export function Navigation({ mobile = false, onClose }: NavigationProps) {
  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  if (mobile) {
    return (
      <nav className="space-y-2">
        <Link
          href="/servicios"
          onClick={handleLinkClick}
          className="block py-3 font-medium text-gray-900 hover:text-petcom-coral transition-colors"
        >
          Servicios
        </Link>
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-6">
      <Link
        href="/servicios"
        className="font-medium text-gray-700 hover:text-petcom-coral transition-colors"
      >
        Servicios
      </Link>
    </nav>
  );
}
