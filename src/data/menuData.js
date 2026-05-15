export const restaurantInfo = {
  name: 'Restaurante Casa Nadia',
  town: 'Driebes',
  phone: '+34 000 000 000',
  whatsapp: '34000000000',
  address: 'Calle principal, Driebes, Guadalajara',
  hours: 'Abierto de martes a domingo · 9:00 - 23:00',
  note: 'Datos provisionales: sustituir por teléfono, dirección y horarios reales.',
}

export const menuData = [
  {
    id: 'entrantes',
    title: 'Entrantes',
    items: [
      {
        name: 'Ensalada de la casa',
        description: 'Lechuga fresca, tomate, cebolla, atún, huevo y aliño tradicional.',
        price: '8,50 €',
      },
      {
        name: 'Croquetas caseras',
        description: 'Cremosas por dentro, doradas por fuera. Ración para compartir.',
        price: '9,00 €',
        allergens: 'Gluten, lácteos',
      },
      {
        name: 'Migas castellanas',
        description: 'Receta de siempre, con ajo, pimentón y acompañamiento de temporada.',
        price: '10,50 €',
      },
    ],
  },
  {
    id: 'raciones',
    title: 'Raciones',
    items: [
      {
        name: 'Patatas bravas Casa Nadia',
        description: 'Patata crujiente con salsa brava suave y alioli.',
        price: '7,50 €',
      },
      {
        name: 'Oreja a la plancha',
        description: 'Bien tostada, con ajo y perejil.',
        price: '11,00 €',
      },
      {
        name: 'Calamares a la romana',
        description: 'Rebozado ligero y limón.',
        price: '12,00 €',
        allergens: 'Gluten, moluscos',
      },
    ],
  },
  {
    id: 'carnes',
    title: 'Carnes',
    items: [
      {
        name: 'Chuletillas de cordero',
        description: 'A la parrilla, con patatas y pimientos.',
        price: '17,50 €',
      },
      {
        name: 'Secreto ibérico',
        description: 'Marcado a la plancha, jugoso y acompañado de guarnición.',
        price: '16,00 €',
      },
      {
        name: 'Filete de ternera',
        description: 'Plato sencillo, casero y abundante.',
        price: '13,50 €',
      },
    ],
  },
  {
    id: 'pescados',
    title: 'Pescados',
    items: [
      {
        name: 'Merluza a la plancha',
        description: 'Con verdura salteada y aceite de ajo.',
        price: '15,00 €',
        allergens: 'Pescado',
      },
      {
        name: 'Bacalao con tomate',
        description: 'Salsa casera, punto suave y pan para mojar.',
        price: '16,50 €',
        allergens: 'Pescado',
      },
    ],
  },
  {
    id: 'bocadillos',
    title: 'Bocadillos',
    items: [
      {
        name: 'Lomo con queso',
        description: 'Pan crujiente, lomo a la plancha y queso fundido.',
        price: '6,50 €',
        allergens: 'Gluten, lácteos',
      },
      {
        name: 'Tortilla francesa',
        description: 'Clásico, rápido y recién hecho.',
        price: '5,50 €',
        allergens: 'Gluten, huevo',
      },
      {
        name: 'Bacon completo',
        description: 'Bacon, queso, tomate y lechuga.',
        price: '7,00 €',
        allergens: 'Gluten, lácteos',
      },
    ],
  },
  {
    id: 'postres',
    title: 'Postres',
    items: [
      {
        name: 'Flan casero',
        description: 'Receta tradicional con caramelo.',
        price: '4,50 €',
        allergens: 'Huevo, lácteos',
      },
      {
        name: 'Tarta de queso',
        description: 'Cremosa, con base crujiente y mermelada.',
        price: '5,50 €',
        allergens: 'Gluten, lácteos',
      },
      {
        name: 'Helados variados',
        description: 'Consulta sabores disponibles.',
        price: '4,00 €',
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    items: [
      {
        name: 'Refrescos',
        description: 'Variedad de refrescos fríos.',
        price: '2,50 €',
      },
      {
        name: 'Caña',
        description: 'Cerveza bien tirada.',
        price: '2,20 €',
      },
      {
        name: 'Vino de la casa',
        description: 'Tinto, blanco o rosado.',
        price: '3,00 €',
      },
      {
        name: 'Café',
        description: 'Solo, cortado, con leche o descafeinado.',
        price: '1,50 €',
      },
    ],
  },
]
