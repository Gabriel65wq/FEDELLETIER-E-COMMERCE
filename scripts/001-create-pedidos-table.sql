-- Crear tabla de pedidos
CREATE TABLE IF NOT EXISTS pedidos (
  id SERIAL PRIMARY KEY,
  nombre_apellido VARCHAR(255) NOT NULL,
  dni VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  metodo_entrega VARCHAR(50) NOT NULL,
  metodo_pago VARCHAR(50) NOT NULL,
  items JSONB NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  dia_retiro DATE,
  horario_retiro TIME,
  direccion VARCHAR(255),
  altura VARCHAR(20),
  piso_depto VARCHAR(50),
  localidad VARCHAR(100),
  provincia VARCHAR(100),
  codigo_postal VARCHAR(20),
  instrucciones_entrega TEXT,
  estado VARCHAR(50) DEFAULT 'pendiente',
  mercadopago_payment_id VARCHAR(255),
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX idx_pedidos_email ON pedidos(email);
CREATE INDEX idx_pedidos_estado ON pedidos(estado);
CREATE INDEX idx_pedidos_fecha_creacion ON pedidos(fecha_creacion);
CREATE INDEX idx_pedidos_mercadopago_payment_id ON pedidos(mercadopago_payment_id);
