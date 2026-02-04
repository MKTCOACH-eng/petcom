import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EmailSubscription } from './EmailSubscription'

// Mock the supabase client
jest.mock('@/shared/lib/supabase', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(() => ({
            data: null,
            error: null,
          })),
        })),
      })),
      insert: jest.fn(() => ({
        select: jest.fn(() => ({
          single: jest.fn(() => ({
            data: { id: 'test-id', email: 'test@example.com' },
            error: null,
          })),
        })),
      })),
    })),
  },
}))

describe('EmailSubscription', () => {
  it('renders email subscription form', () => {
    render(<EmailSubscription />)
    
    expect(screen.getByText('¿Quieres ser el primero en conocer nuestras novedades?')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Tu email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /suscribirme/i })).toBeInTheDocument()
  })

  it('shows validation error for invalid email', async () => {
    render(<EmailSubscription />)
    
    const emailInput = screen.getByPlaceholderText('Tu email')
    const submitButton = screen.getByRole('button', { name: /suscribirme/i })
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Por favor, ingresa un email válido')).toBeInTheDocument()
    })
  })

  it('submits form with valid email', async () => {
    const { supabase } = require('@/shared/lib/supabase')
    
    render(<EmailSubscription />)
    
    const emailInput = screen.getByPlaceholderText('Tu email')
    const submitButton = screen.getByRole('button', { name: /suscribirme/i })
    
    await userEvent.type(emailInput, 'test@example.com')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(supabase.from).toHaveBeenCalledWith('email_subscriptions')
      expect(screen.getByText('¡Gracias por suscribirte!')).toBeInTheDocument()
    })
  })

  it('shows loading state during submission', async () => {
    const { supabase } = require('@/shared/lib/supabase')
    
    // Mock slow response
    supabase.from.mockImplementation(() => ({
      insert: jest.fn(() => ({
        select: jest.fn(() => ({
          single: jest.fn(() => 
            new Promise(resolve => 
              setTimeout(() => resolve({ 
                data: { id: 'test-id', email: 'test@example.com' }, 
                error: null 
              }), 100)
            )
          ),
        })),
      })),
    }))
    
    render(<EmailSubscription />)
    
    const emailInput = screen.getByPlaceholderText('Tu email')
    const submitButton = screen.getByRole('button', { name: /suscribirme/i })
    
    await userEvent.type(emailInput, 'test@example.com')
    fireEvent.click(submitButton)
    
    expect(screen.getByText('Suscribiendo...')).toBeInTheDocument()
    
    await waitFor(() => {
      expect(screen.getByText('¡Gracias por suscribirte!')).toBeInTheDocument()
    })
  })

  it('handles submission errors gracefully', async () => {
    const { supabase } = require('@/shared/lib/supabase')
    
    // Mock error response
    supabase.from.mockImplementation(() => ({
      insert: jest.fn(() => ({
        select: jest.fn(() => ({
          single: jest.fn(() => ({
            data: null,
            error: { message: 'Database error' },
          })),
        })),
      })),
    }))
    
    render(<EmailSubscription />)
    
    const emailInput = screen.getByPlaceholderText('Tu email')
    const submitButton = screen.getByRole('button', { name: /suscribirme/i })
    
    await userEvent.type(emailInput, 'test@example.com')
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Error al suscribirte. Por favor, intenta nuevamente.')).toBeInTheDocument()
    })
  })

  it('prevents duplicate submissions', async () => {
    const { supabase } = require('@/shared/lib/supabase')
    
    render(<EmailSubscription />)
    
    const emailInput = screen.getByPlaceholderText('Tu email')
    const submitButton = screen.getByRole('button', { name: /suscribirme/i })
    
    await userEvent.type(emailInput, 'test@example.com')
    
    // Submit twice quickly
    fireEvent.click(submitButton)
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(supabase.from).toHaveBeenCalledTimes(1)
    })
  })
})