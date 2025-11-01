-- Crear tabla de pedidos si no existe
CREATE TABLE IF NOT EXISTS pedidos (
  id BIGSERIAL PRIMARY KEY,
  numero_pedido VARCHAR(100) UNIQUE NOT NULL,
  nombre_apellido VARCHAR(255) NOT NULL,
  dni VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  metodo_entrega VARCHAR(50) NOT NULL,
  metodo_pago VARCHAR(50) NOT NULL,
  estado VARCHAR(50) NOT NULL DEFAULT 'pendiente',
  total DECIMAL(10, 2) NOT NULL,
  items JSONB NOT NULL,
  
  -- Datos de retiro
  dia_retiro DATE,
  horario_retiro TIME,
  
  -- Datos de envío
  direccion VARCHAR(255),
  altura VARCHAR(50),
  piso_depto VARCHAR(50),
  localidad VARCHAR(100),
  provincia VARCHAR(100),
  codigo_postal VARCHAR(20),
  instrucciones_entrega TEXT,
  
  -- Datos de MercadoPago
  mp_preference_id VARCHAR(100),
  mp_payment_id VARCHAR(100),
  mp_status VARCHAR(50),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_pedidos_numero_pedido ON pedidos(numero_pedido);
CREATE INDEX IF NOT EXISTS idx_pedidos_email ON pedidos(email);
CREATE INDEX IF NOT EXISTS idx_pedidos_estado ON pedidos(estado);
CREATE INDEX IF NOT EXISTS idx_pedidos_created_at ON pedidos(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_pedidos_mp_payment_id ON pedidos(mp_payment_id);

-- Comentarios para documentación
COMMENT ON TABLE pedidos IS 'Tabla principal de pedidos de la tienda';
COMMENT ON COLUMN pedidos.numero_pedido IS 'Número único de pedido generado automáticamente';
COMMENT ON COLUMN pedidos.estado IS 'Estados: pendiente, pendiente_pago, pagado, procesando, enviado, entregado, cancelado, rechazado';
COMMENT ON COLUMN pedidos.items IS 'Array JSON con los productos del pedido';
