/* ==========================================================================
   StockMaster - Standalone Engine & Controller (No CORS / file:// restriction)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. MOCK DATA INITIALIZATION
   -------------------------------------------------------------------------- */
const INITIAL_CATEGORIES = [
  { id: 'cat-1', name: 'Eletrônicos & Informática', icon: 'laptop', color: '#06b6d4' },
  { id: 'cat-2', name: 'Periféricos & Acessórios', icon: 'keyboard', color: '#6366f1' },
  { id: 'cat-3', name: 'Móveis & Utensílios', icon: 'armchair', color: '#8b5cf6' },
  { id: 'cat-4', name: 'Armazenamento & Memória', icon: 'hard-drive', color: '#10b981' },
  { id: 'cat-5', name: 'Cabos & Conectividade', icon: 'zap', color: '#f59e0b' },
  { id: 'cat-6', name: 'Impressoras & Scanners', icon: 'printer', color: '#ec4899' }
];

const INITIAL_SUPPLIERS = [
  { id: 'sup-1', name: 'TechDistribuidora S.A.', email: 'contato@techdist.com.br', phone: '(11) 3456-7890', contactPerson: 'Carlos Silva' },
  { id: 'sup-2', name: 'Global Office Soluções', email: 'vendas@globaloffice.com.br', phone: '(21) 2555-1234', contactPerson: 'Mariana Costa' },
  { id: 'sup-3', name: 'FastLog Importados', email: 'atendimento@fastlog.com', phone: '(41) 3012-9988', contactPerson: 'Roberto Alves' }
];

const INITIAL_PRODUCTS = [
  {
    id: 'prod-101',
    sku: 'PROD-LAP-01',
    name: 'Notebook Pro Ultra 15"',
    category: 'Eletrônicos & Informática',
    quantity: 14,
    minQuantity: 5,
    unitPrice: 4599.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Corredor A - Prateleira 2',
    icon: '💻',
    notes: 'Processador i7 16GB RAM 512GB SSD'
  },
  {
    id: 'prod-102',
    sku: 'PROD-MON-02',
    name: 'Monitor Gamer 27" 165Hz IPS',
    category: 'Eletrônicos & Informática',
    quantity: 3,
    minQuantity: 5,
    unitPrice: 1399.90,
    supplier: 'TechDistribuidora S.A.',
    location: 'Corredor A - Prateleira 4',
    icon: '🖥️',
    notes: 'Painel IPS 1ms QHD'
  },
  {
    id: 'prod-103',
    sku: 'PROD-KB-03',
    name: 'Teclado Mecânico RGB Wireless',
    category: 'Periféricos & Acessórios',
    quantity: 28,
    minQuantity: 8,
    unitPrice: 349.00,
    supplier: 'FastLog Importados',
    location: 'Corredor B - Prateleira 1',
    icon: '⌨️',
    notes: 'Switches Brown silenciosos'
  },
  {
    id: 'prod-104',
    sku: 'PROD-MSE-04',
    name: 'Mouse Ergonômico Vertical',
    category: 'Periféricos & Acessórios',
    quantity: 2,
    minQuantity: 6,
    unitPrice: 189.90,
    supplier: 'FastLog Importados',
    location: 'Corredor B - Prateleira 2',
    icon: '🖱️',
    notes: 'Conexão Bluetooth e Dongle 2.4G'
  },
  {
    id: 'prod-105',
    sku: 'PROD-SSD-05',
    name: 'SSD NVMe 1TB PCIe 4.0',
    category: 'Armazenamento & Memória',
    quantity: 45,
    minQuantity: 10,
    unitPrice: 489.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Corredor C - Gaveta 3',
    icon: '💾',
    notes: 'Leitura de até 7000 MB/s'
  },
  {
    id: 'prod-106',
    sku: 'PROD-CHR-06',
    name: 'Cadeira Ergonômica Mesh Pro',
    category: 'Móveis & Utensílios',
    quantity: 0,
    minQuantity: 3,
    unitPrice: 1199.00,
    supplier: 'Global Office Soluções',
    location: 'Depósito 2 - Setor M',
    icon: '🪑',
    notes: 'Ajuste lombar 3D e apoio de cabeça'
  },
  {
    id: 'prod-107',
    sku: 'PROD-CBL-07',
    name: 'Cabo HDMI 2.1 4K 120Hz 2m',
    category: 'Cabos & Conectividade',
    quantity: 60,
    minQuantity: 15,
    unitPrice: 45.90,
    supplier: 'FastLog Importados',
    location: 'Corredor D - Caixa 12',
    icon: '🔌',
    notes: 'Malha trançada reforçada'
  },
  {
    id: 'prod-108',
    sku: 'PROD-HED-08',
    name: 'Headset Wireless Noise Cancelling',
    category: 'Periféricos & Acessórios',
    quantity: 12,
    minQuantity: 4,
    unitPrice: 620.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Corredor B - Prateleira 3',
    icon: '🎧',
    notes: 'Bateria de 40 horas e microfone destacável'
  },
  {
    id: 'prod-out-1',
    sku: 'OUT-INS-01',
    name: 'Toner HP LaserJet Preto Q2612A',
    category: 'Impressoras & Scanners',
    quantity: 25,
    minQuantity: 5,
    unitPrice: 180.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Estoque Outsourcing - Prat 1',
    icon: '🖨️',
    notes: 'Cartucho de toner de alto rendimento'
  },
  {
    id: 'prod-out-2',
    sku: 'OUT-INS-02',
    name: 'Cilindro Fotocondutor Brother DR-520',
    category: 'Impressoras & Scanners',
    quantity: 12,
    minQuantity: 3,
    unitPrice: 240.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Estoque Outsourcing - Prat 1',
    icon: '🟢',
    notes: 'Fotocondutor para 25.000 páginas'
  },
  {
    id: 'prod-out-3',
    sku: 'OUT-INS-03',
    name: 'Garrafa de Tinta Epson Black T664',
    category: 'Impressoras & Scanners',
    quantity: 40,
    minQuantity: 10,
    unitPrice: 55.00,
    supplier: 'FastLog Importados',
    location: 'Estoque Outsourcing - Caixa 4',
    icon: '🧪',
    notes: 'Refil de tinta original 70ml'
  },
  {
    id: 'prod-out-4',
    sku: 'OUT-PEC-01',
    name: 'Unidade Fusora Samsung 110V',
    category: 'Impressoras & Scanners',
    quantity: 4,
    minQuantity: 2,
    unitPrice: 450.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Estoque Outsourcing - Prat 3',
    icon: '⚙️',
    notes: 'Módulo de fusão completo'
  },
  {
    id: 'prod-out-5',
    sku: 'OUT-PEC-02',
    name: 'Kit Roletes Pickup Roller Tracionador',
    category: 'Impressoras & Scanners',
    quantity: 15,
    minQuantity: 5,
    unitPrice: 35.00,
    supplier: 'FastLog Importados',
    location: 'Estoque Outsourcing - Gaveta 2',
    icon: '🔧',
    notes: 'Borracha tracionadora de papel'
  },
  {
    id: 'prod-out-6',
    sku: 'OUT-PEC-03',
    name: 'Placa Lógica Impressora Ricoh MP201',
    category: 'Impressoras & Scanners',
    quantity: 2,
    minQuantity: 1,
    unitPrice: 890.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Estoque Outsourcing - Cofre 1',
    icon: '🔌',
    notes: 'Placa mãe principal de controle'
  },
  {
    id: 'prod-prt-1',
    sku: 'IMP-LSR-01',
    name: 'Impressora Multifuncional HP LaserJet Pro M428fdw',
    category: 'Impressoras & Scanners',
    quantity: 8,
    minQuantity: 2,
    unitPrice: 2450.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Estoque Impressoras - Setor H',
    icon: '🖨️',
    notes: 'Multifuncional Laser Monocromática Duplex Wi-Fi'
  },
  {
    id: 'prod-prt-2',
    sku: 'IMP-TRM-02',
    name: 'Impressora Térmica de Etiquetas Zebra ZT230',
    category: 'Impressoras & Scanners',
    quantity: 5,
    minQuantity: 2,
    unitPrice: 3890.00,
    supplier: 'FastLog Importados',
    location: 'Estoque Impressoras - Setor H',
    icon: '🏷️',
    notes: 'Impressora industrial de código de barras'
  },
  {
    id: 'prod-prt-3',
    sku: 'IMP-INK-03',
    name: 'Impressora Ecotank Epson L3250 Color',
    category: 'Impressoras & Scanners',
    quantity: 14,
    minQuantity: 4,
    unitPrice: 1150.00,
    supplier: 'Global Office Soluções',
    location: 'Estoque Impressoras - Setor H',
    icon: '🖨️',
    notes: 'Tanque de tinta colorido Wi-Fi Direct'
  },
  {
    id: 'prod-scn-1',
    sku: 'SCN-DUP-01',
    name: 'Scanner de Mesa Fujitsu fi-7160 Duplex',
    category: 'Impressoras & Scanners',
    quantity: 6,
    minQuantity: 2,
    unitPrice: 4200.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Estoque Scanners - Prat 2',
    icon: '📄',
    notes: 'Scanner profissional 60ppm ADF'
  },
  {
    id: 'prod-scn-2',
    sku: 'SCN-DOC-02',
    name: 'Scanner de Documentos Kodak Alaris S2050',
    category: 'Impressoras & Scanners',
    quantity: 3,
    minQuantity: 1,
    unitPrice: 5600.00,
    supplier: 'TechDistribuidora S.A.',
    location: 'Estoque Scanners - Prat 2',
    icon: '📑',
    notes: 'Scanner alta velocidade 50ppm USB 3.1'
  },
  {
    id: 'prod-scn-3',
    sku: 'SCN-PRT-03',
    name: 'Scanner Portátil Canon ImageFORMULA P-215II',
    category: 'Impressoras & Scanners',
    quantity: 9,
    minQuantity: 3,
    unitPrice: 1350.00,
    supplier: 'FastLog Importados',
    location: 'Estoque Scanners - Prat 1',
    icon: '📱',
    notes: 'Scanner compacto alimentado via USB'
  }
];

const INITIAL_TRANSACTIONS = [
  {
    id: 'tx-1001',
    productId: 'prod-101',
    productSku: 'PROD-LAP-01',
    productName: 'Notebook Pro Ultra 15"',
    type: 'IN',
    quantity: 10,
    previousQuantity: 4,
    newQuantity: 14,
    reason: 'Compra de Estoque - NF 4482',
    user: 'Ana Beatriz (Compras)',
    timestamp: new Date(Date.now() - 3600000 * 24 * 2).toISOString()
  },
  {
    id: 'tx-1002',
    productId: 'prod-104',
    productSku: 'PROD-MSE-04',
    productName: 'Mouse Ergonômico Vertical',
    type: 'OUT',
    quantity: 5,
    previousQuantity: 7,
    newQuantity: 2,
    reason: 'Venda de Balcão - Pedido #8912',
    user: 'Carlos Eduardo (Vendas)',
    timestamp: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    id: 'tx-1003',
    productId: 'prod-106',
    productSku: 'PROD-CHR-06',
    productName: 'Cadeira Ergonômica Mesh Pro',
    type: 'OUT',
    quantity: 3,
    previousQuantity: 3,
    newQuantity: 0,
    reason: 'Equipamento para novos colaboradores',
    user: 'Mariana Souza (RH)',
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString()
  }
];

/* --------------------------------------------------------------------------
   2. STORAGE ENGINE (LocalStorage)
   -------------------------------------------------------------------------- */
const STORAGE_KEYS = {
  PRODUCTS: 'stockmaster_products_v8',
  CATEGORIES: 'stockmaster_categories_v8',
  SUPPLIERS: 'stockmaster_suppliers_v8',
  TRANSACTIONS: 'stockmaster_transactions_v8',
  USERS: 'stockmaster_users_v1',
  CURRENT_USER: 'stockmaster_current_user_v1',
  ONLINE_SESSIONS: 'stockmaster_online_sessions_v2'
};

function ensureInventoryCodes(products) {
  let invCounter = 1;
  let modified = false;

  products.forEach(p => {
    if (Array.isArray(p.inventoryCodes)) {
      p.inventoryCodes.forEach(code => {
        const match = String(code).match(/INV-(\d+)/i);
        if (match) {
          const val = parseInt(match[1], 10);
          if (val >= invCounter) invCounter = val + 1;
        }
      });
    }
  });

  const updated = products.map(p => {
    const qty = Math.max(0, Number(p.quantity) || 0);
    let codes = Array.isArray(p.inventoryCodes) ? [...p.inventoryCodes] : [];

    if (codes.length < qty) {
      modified = true;
      const needed = qty - codes.length;
      for (let i = 0; i < needed; i++) {
        const codeStr = `INV-${String(invCounter).padStart(6, '0')}`;
        codes.push(codeStr);
        invCounter++;
      }
    } else if (codes.length > qty) {
      modified = true;
      codes = codes.slice(0, qty);
    }

    return {
      ...p,
      inventoryCodes: codes
    };
  });

  return { updatedProducts: updated, modified };
}

function initStorage() {
  if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
  }
  if (!localStorage.getItem(STORAGE_KEYS.SUPPLIERS)) {
    localStorage.setItem(STORAGE_KEYS.SUPPLIERS, JSON.stringify(INITIAL_SUPPLIERS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.TRANSACTIONS)) {
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(INITIAL_TRANSACTIONS));
  }
}

function resetStorage() {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
  localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
  localStorage.setItem(STORAGE_KEYS.SUPPLIERS, JSON.stringify(INITIAL_SUPPLIERS));
  localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(INITIAL_TRANSACTIONS));
}

function getProducts() {
  initStorage();
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS)) || [];
    const { updatedProducts, modified } = ensureInventoryCodes(raw);
    if (modified) {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(updatedProducts));
    }
    return updatedProducts;
  } catch (e) {
    return [];
  }
}

function getProductById(id) {
  return getProducts().find(p => p.id === id);
}

function saveProduct(productData) {
  const products = getProducts();
  let updatedProducts;
  let savedProduct;

  if (productData.id) {
    updatedProducts = products.map(p => {
      if (p.id === productData.id) {
        savedProduct = { ...p, ...productData, updatedAt: new Date().toISOString() };
        return savedProduct;
      }
      return p;
    });
  } else {
    const newId = 'prod-' + Date.now();
    savedProduct = {
      ...productData,
      id: newId,
      quantity: Number(productData.quantity) || 0,
      minQuantity: Number(productData.minQuantity) || 0,
      unitPrice: Number(productData.unitPrice) || 0,
      createdAt: new Date().toISOString()
    };
    updatedProducts = [savedProduct, ...products];
  }

  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(updatedProducts));
  return savedProduct;
}

function deleteProduct(id) {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(filtered));
}

function getTransactions() {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.TRANSACTIONS)) || [];
  } catch (e) {
    return [];
  }
}

function recordStockMovement({ productId, type, quantity, reason, user = 'Administrador' }) {
  const products = getProducts();
  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    throw new Error('Produto não encontrado.');
  }

  const product = products[productIndex];
  const qtyNum = Number(quantity);

  if (isNaN(qtyNum) || qtyNum <= 0) {
    throw new Error('Quantidade inválida para movimentação.');
  }

  let newQty = product.quantity;
  if (type === 'IN') {
    newQty += qtyNum;
  } else if (type === 'OUT') {
    if (product.quantity < qtyNum) {
      throw new Error(`Estoque insuficiente! Saldo atual: ${product.quantity} unidades.`);
    }
    newQty -= qtyNum;
  } else {
    throw new Error('Tipo de movimentação inválido.');
  }

  const prevQty = product.quantity;
  products[productIndex].quantity = newQty;
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));

  const transaction = {
    id: 'tx-' + Date.now(),
    productId: product.id,
    productSku: product.sku,
    productName: product.name,
    type,
    quantity: qtyNum,
    previousQuantity: prevQty,
    newQuantity: newQty,
    reason: reason || (type === 'IN' ? 'Entrada manual' : 'Saída manual'),
    user,
    timestamp: new Date().toISOString()
  };

  const transactions = getTransactions();
  transactions.unshift(transaction);
  localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));

  return { product: products[productIndex], transaction };
}

function getCategories() {
  initStorage();
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.CATEGORIES)) || [];
}

function getSuppliers() {
  initStorage();
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.SUPPLIERS)) || [];
}

function saveSupplier(supplierData) {
  const suppliers = getSuppliers();
  const newSupplier = {
    id: 'sup-' + Date.now(),
    ...supplierData
  };
  suppliers.push(newSupplier);
  localStorage.setItem(STORAGE_KEYS.SUPPLIERS, JSON.stringify(suppliers));
  return newSupplier;
}

function deleteSupplier(id) {
  const suppliers = getSuppliers();
  const filtered = suppliers.filter(s => s.id !== id);
  localStorage.setItem(STORAGE_KEYS.SUPPLIERS, JSON.stringify(filtered));
}

const INITIAL_USERS = [
  {
    id: 'usr_admin',
    name: 'Administrador',
    username: 'admin',
    password: 'RfuC@15042006',
    role: 'admin',
    status: 'active',
    createdAt: '2026-08-18T10:00:00.000Z'
  },
  {
    id: 'usr_default',
    name: 'Usuário Consulta',
    username: 'usuario',
    password: 'user123',
    role: 'viewer',
    status: 'active',
    createdAt: '2026-08-18T10:00:00.000Z'
  }
];

function getUsers() {
  const data = localStorage.getItem(STORAGE_KEYS.USERS);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(INITIAL_USERS));
    return INITIAL_USERS;
  }
  try {
    let parsed = JSON.parse(data);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(INITIAL_USERS));
      return INITIAL_USERS;
    }
    // Automatically migrate/update master admin user password if old
    const adminIdx = parsed.findIndex(u => u.username === 'admin');
    if (adminIdx !== -1 && parsed[adminIdx].password === 'RfuC@21051963') {
      parsed[adminIdx].password = 'RfuC@15042006';
      saveUsers(parsed);
    }
    return parsed;
  } catch (e) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(INITIAL_USERS));
    return INITIAL_USERS;
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

function getUserById(id) {
  return getUsers().find(u => u.id === id);
}

function getUserByUsername(username) {
  if (!username) return null;
  const clean = username.trim().toLowerCase();
  return getUsers().find(u => u.username.toLowerCase() === clean);
}

function getInventoryStats() {
  const products = getProducts();

  let totalItems = 0;
  let totalValue = 0;
  let lowStockCount = 0;
  let outOfStockCount = 0;

  products.forEach(p => {
    const qty = Number(p.quantity) || 0;
    const minQty = Number(p.minQuantity) || 0;
    const price = Number(p.unitPrice) || 0;

    totalItems += qty;
    totalValue += (qty * price);

    if (qty === 0) {
      outOfStockCount++;
    } else if (qty <= minQty) {
      lowStockCount++;
    }
  });

  return {
    totalProductsCount: products.length,
    totalItemsQuantity: totalItems,
    totalValue,
    lowStockCount,
    outOfStockCount
  };
}

/* --------------------------------------------------------------------------
   3. CHARTS ENGINE (Chart.js Wrapper)
   -------------------------------------------------------------------------- */
let categoryChartInstance = null;
let movementChartInstance = null;

function renderDashboardCharts(products, transactions) {
  if (typeof Chart === 'undefined') {
    return;
  }

  // Render Doughnut Category Chart
  const catCanvas = document.getElementById('categoryChart');
  if (catCanvas) {
    const categoryCounts = {};
    products.forEach(p => {
      const cat = p.category || 'Outros';
      categoryCounts[cat] = (categoryCounts[cat] || 0) + p.quantity;
    });

    const labels = Object.keys(categoryCounts);
    const data = Object.values(categoryCounts);
    const colors = ['#06b6d4', '#6366f1', '#8b5cf6', '#10b981', '#f59e0b', '#f43f5e'];

    if (categoryChartInstance) categoryChartInstance.destroy();

    const ctx = catCanvas.getContext('2d');
    categoryChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors.slice(0, labels.length),
          borderColor: '#0f172a',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#94a3b8', font: { family: 'Inter', size: 11 }, usePointStyle: true }
          }
        },
        cutout: '70%'
      }
    });
  }

  // Render Bar Movement Chart
  const movCanvas = document.getElementById('movementChart');
  if (movCanvas) {
    const daysMap = {};
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
      daysMap[dateStr] = { in: 0, out: 0 };
    }

    transactions.forEach(t => {
      if (!t.timestamp) return;
      const dateStr = new Date(t.timestamp).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
      if (daysMap[dateStr]) {
        if (t.type === 'IN') daysMap[dateStr].in += Number(t.quantity);
        else if (t.type === 'OUT') daysMap[dateStr].out += Number(t.quantity);
      }
    });

    const labels = Object.keys(daysMap);
    const dataIn = labels.map(l => daysMap[l].in);
    const dataOut = labels.map(l => daysMap[l].out);

    if (movementChartInstance) movementChartInstance.destroy();

    const ctx = movCanvas.getContext('2d');
    movementChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Entradas',
            data: dataIn,
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            borderColor: '#10b981',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Saídas',
            data: dataOut,
            backgroundColor: 'rgba(244, 63, 94, 0.7)',
            borderColor: '#f43f5e',
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
          y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' }, beginAtZero: true }
        },
        plugins: {
          legend: { position: 'top', align: 'end', labels: { color: '#94a3b8', usePointStyle: true } }
        }
      }
    });
  }
}

/* --------------------------------------------------------------------------
   4. APPLICATION STATE, AUTHENTICATION & CONTROLLER
   -------------------------------------------------------------------------- */
const AUTH_CONFIG = {
  MASTER_PASSWORD: 'RfuC@15042006',
  STORAGE_KEY: 'stockmaster_authenticated_v1'
};

function getCurrentUser() {
  const sessionData = sessionStorage.getItem(STORAGE_KEYS.CURRENT_USER) || localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  if (sessionData) {
    try { return JSON.parse(sessionData); } catch (e) { return null; }
  }
  return null;
}

function setCurrentUser(user) {
  if (user) {
    const safeUser = { id: user.id, name: user.name, username: user.username, role: user.role, status: user.status };
    sessionStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(safeUser));
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(safeUser));
    updateUserSidebarUI(safeUser);
    updateOnlineHeartbeat();
  } else {
    sessionStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    removeCurrentOnlineSession();
  }
}

function updateUserSidebarUI(user) {
  if (!user) return;
  const nameEl = document.getElementById('current-user-name');
  const roleEl = document.getElementById('current-user-role');
  const avatarEl = document.getElementById('current-user-avatar');

  if (nameEl) nameEl.textContent = user.name;
  if (roleEl) {
    const roleMap = { admin: 'Administrador', operator: 'Operador de Estoque', viewer: 'Visualizador' };
    roleEl.textContent = roleMap[user.role] || user.role;
  }
  if (avatarEl) {
    const parts = (user.name || '').trim().split(' ');
    const initials = parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : (parts[0] || 'AD').slice(0, 2).toUpperCase();
    avatarEl.textContent = initials;
  }
}

/* --------------------------------------------------------------------------
   ONLINE USERS TRACKING & REAL-TIME SESSIONS ENGINE
   -------------------------------------------------------------------------- */
function getOnlineSessions() {
  const data = localStorage.getItem(STORAGE_KEYS.ONLINE_SESSIONS);
  if (!data) return [];
  try {
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) return [];
    const now = Date.now();
    // Keep active sessions with activity in the last 60 seconds
    return parsed.filter(s => s && s.username && (now - Number(s.lastSeen || 0)) < 60000);
  } catch (e) {
    return [];
  }
}

function saveOnlineSessions(sessions) {
  localStorage.setItem(STORAGE_KEYS.ONLINE_SESSIONS, JSON.stringify(sessions));
}

function updateOnlineHeartbeat() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    updateOnlineUI([]);
    return;
  }

  let tabId = sessionStorage.getItem('stockmaster_tab_id');
  if (!tabId) {
    tabId = 'tab_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
    sessionStorage.setItem('stockmaster_tab_id', tabId);
  }

  let loginTime = sessionStorage.getItem('stockmaster_login_time');
  if (!loginTime) {
    loginTime = new Date().toISOString();
    sessionStorage.setItem('stockmaster_login_time', loginTime);
  }

  const sessions = getOnlineSessions();
  const now = Date.now();

  const tabNames = {
    dashboard: '📊 Visão Geral (Dashboard)',
    inventory: '📦 Catálogo de Inventário',
    transactions: '🔄 Histórico de Movimentações',
    categories: '📁 Categorias & Fornecedores',
    reports: '📈 Relatórios Gerenciais',
    users: '👥 Gestão de Usuários'
  };

  const currentTabName = tabNames[state.currentTab] || 'Navegando no Sistema';

  const existingIdx = sessions.findIndex(s => s.tabId === tabId || (s.username === currentUser.username && s.tabId === tabId));
  const currentRecord = {
    tabId: tabId,
    id: currentUser.id,
    username: currentUser.username,
    name: currentUser.name,
    role: currentUser.role,
    currentTab: state.currentTab,
    currentTabName: currentTabName,
    lastSeen: now,
    loginTime: loginTime
  };

  if (existingIdx !== -1) {
    sessions[existingIdx] = currentRecord;
  } else {
    sessions.push(currentRecord);
  }

  saveOnlineSessions(sessions);
  updateOnlineUI(sessions);
}

function removeCurrentOnlineSession() {
  const tabId = sessionStorage.getItem('stockmaster_tab_id');
  if (!tabId) return;
  const sessions = getOnlineSessions().filter(s => s.tabId !== tabId);
  saveOnlineSessions(sessions);
  updateOnlineUI(sessions);
}

function updateOnlineUI(sessions) {
  const activeSessions = sessions || getOnlineSessions();
  const uniqueUsernames = new Set(activeSessions.map(s => s.username.toLowerCase()));
  const count = uniqueUsernames.size || (getCurrentUser() ? 1 : 0);

  // Top header badge
  const badgeEl = document.getElementById('online-users-count-badge');
  if (badgeEl) {
    badgeEl.textContent = `${count} Online`;
  }

  // Users view stat card
  const statOnlineEl = document.getElementById('stat-online-users');
  if (statOnlineEl) {
    statOnlineEl.textContent = count;
  }

  // Re-render modal if open
  const modal = document.getElementById('online-users-modal');
  if (modal && modal.classList.contains('active')) {
    window.renderOnlineUsersList();
  }
}

window.openOnlineUsersModal = function() {
  updateOnlineHeartbeat();
  const modal = document.getElementById('online-users-modal');
  if (modal) {
    window.renderOnlineUsersList();
    modal.classList.add('active');
  }
  setTimeout(initIcons, 50);
};

window.closeOnlineUsersModal = function() {
  const modal = document.getElementById('online-users-modal');
  if (modal) modal.classList.remove('active');
};

window.renderOnlineUsersList = function() {
  const sessions = getOnlineSessions();
  const container = document.getElementById('online-users-list-container');
  const subtitle = document.getElementById('online-users-modal-subtitle');
  if (!container) return;

  // Deduplicate by username keeping newest timestamp
  const userMap = new Map();
  sessions.forEach(s => {
    const key = (s.username || '').toLowerCase();
    if (!userMap.has(key) || userMap.get(key).lastSeen < s.lastSeen) {
      userMap.set(key, s);
    }
  });

  const uniqueList = Array.from(userMap.values());
  const currentUser = getCurrentUser();

  if (subtitle) {
    subtitle.textContent = `${uniqueList.length} ${uniqueList.length === 1 ? 'usuário conectado' : 'usuários conectados'} em tempo real`;
  }

  if (uniqueList.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 2rem;">
        Nenhum usuário detectado online no momento.
      </div>
    `;
    return;
  }

  const roleLabels = {
    admin: '<span style="color: #fbbf24; font-weight: 600; font-size: 0.75rem;">🛡️ Administrador</span>',
    operator: '<span style="color: #34d399; font-weight: 600; font-size: 0.75rem;">📦 Operador</span>',
    viewer: '<span style="color: #38bdf8; font-weight: 600; font-size: 0.75rem;">👁️ Modo Consulta</span>'
  };

  container.innerHTML = uniqueList.map(s => {
    const parts = (s.name || '').trim().split(' ');
    const initials = parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : (parts[0] || 'US').slice(0, 2).toUpperCase();
    const isMe = currentUser && (currentUser.username || '').toLowerCase() === (s.username || '').toLowerCase();
    const loginDate = s.loginTime ? new Date(s.loginTime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : 'Agora';

    return `
      <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0.85rem 1rem; gap: 0.75rem; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div style="position: relative;">
            <div class="avatar" style="width: 40px; height: 40px; font-size: 0.9rem; background: var(--bg-card); border: 1px solid var(--border);">${initials}</div>
            <span style="position: absolute; bottom: 0; right: 0; width: 11px; height: 11px; border-radius: 50%; background: #10b981; border: 2px solid #0f172a; box-shadow: 0 0 6px #10b981;"></span>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <strong style="color: var(--text-main); font-size: 0.925rem;">${s.name}</strong>
              ${isMe ? '<span class="badge" style="background: rgba(14, 165, 233, 0.2); color: #38bdf8; font-size: 0.65rem; padding: 0.1rem 0.35rem; border-radius: var(--radius-sm);">Você</span>' : ''}
            </div>
            <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.15rem;">
              <code>@${s.username}</code> • ${roleLabels[s.role] || s.role}
            </div>
          </div>
        </div>

        <div style="text-align: right; font-size: 0.75rem;">
          <div style="color: var(--primary); font-weight: 500; margin-bottom: 0.15rem;">
            ${s.currentTabName || 'Navegando'}
          </div>
          <div style="color: var(--text-dark);">
            🟢 Ativo desde ${loginDate}
          </div>
        </div>
      </div>
    `;
  }).join('');

  setTimeout(initIcons, 50);
};

function isAdmin() {
  const user = getCurrentUser();
  return user && (user.role === 'admin' || user.username === 'admin');
}

function applyPermissionVisibility() {
  const admin = isAdmin();

  // 1. Header quick actions
  const quickTransaction = document.getElementById('btn-quick-transaction');
  const quickAddProd = document.getElementById('btn-quick-add-product');
  if (quickTransaction) quickTransaction.style.display = admin ? 'inline-flex' : 'none';
  if (quickAddProd) quickAddProd.style.display = admin ? 'inline-flex' : 'none';

  // 2. Sidebar users tab (only admins see and manage users)
  const usersTab = document.getElementById('nav-btn-users');
  if (usersTab && usersTab.parentElement) {
    usersTab.parentElement.style.display = admin ? 'block' : 'none';
  }

  // 3. Admin-only buttons
  document.querySelectorAll('.admin-only').forEach(el => {
    el.style.display = admin ? '' : 'none';
  });

  // 4. Header Read-Only Badge
  let readonlyBanner = document.getElementById('readonly-mode-banner');
  const header = document.querySelector('.top-header');
  if (!admin) {
    if (!readonlyBanner && header) {
      readonlyBanner = document.createElement('div');
      readonlyBanner.id = 'readonly-mode-banner';
      readonlyBanner.style.cssText = 'background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.35); color: #38bdf8; font-size: 0.8rem; padding: 0.35rem 0.75rem; border-radius: var(--radius-md); display: flex; align-items: center; gap: 0.4rem; font-weight: 500;';
      readonlyBanner.innerHTML = '👁️ <span>Modo Consulta (Somente Leitura)</span>';
      const actions = header.querySelector('.header-actions');
      if (actions) {
        header.insertBefore(readonlyBanner, actions);
      } else {
        header.appendChild(readonlyBanner);
      }
    }
  } else {
    if (readonlyBanner) readonlyBanner.remove();
  }
}

function checkAuthentication() {
  const user = getCurrentUser();
  const isAuth = !!user;
  const authScreen = document.getElementById('auth-screen');
  const appContainer = document.querySelector('.app-container');

  if (isAuth) {
    if (authScreen) authScreen.style.display = 'none';
    if (appContainer) appContainer.style.display = 'flex';
    updateUserSidebarUI(user);
    applyPermissionVisibility();
    return true;
  } else {
    if (authScreen) authScreen.style.display = 'flex';
    if (appContainer) appContainer.style.display = 'none';
    return false;
  }
}

window.handleLoginSubmit = function(e) {
  if (e) e.preventDefault();
  const usernameInput = document.getElementById('auth-username');
  const passwordInput = document.getElementById('auth-password');
  const errorMsg = document.getElementById('auth-error-msg');

  const enteredUser = usernameInput ? usernameInput.value.trim() : '';
  const enteredPass = passwordInput ? passwordInput.value : '';

  const users = getUsers();
  const matchedUser = users.find(u => u.username.toLowerCase() === enteredUser.toLowerCase());

  // Master admin direct login
  if (enteredUser.toLowerCase() === 'admin' && enteredPass === AUTH_CONFIG.MASTER_PASSWORD) {
    const adminUser = matchedUser || { id: 'usr_admin', name: 'Administrador', username: 'admin', role: 'admin', status: 'active' };
    setCurrentUser(adminUser);
    if (errorMsg) errorMsg.style.display = 'none';
    checkAuthentication();
    renderApp();
    if (window.showToast) window.showToast('🟢 Acesso concedido! Bem-vindo, Administrador.', 'success');
    return;
  }

  if (!matchedUser || matchedUser.password !== enteredPass) {
    if (errorMsg) {
      errorMsg.style.display = 'block';
      errorMsg.textContent = '⚠️ Usuário ou senha incorretos!';
    }
    if (passwordInput) {
      passwordInput.value = '';
      passwordInput.focus();
    }
    return;
  }

  if (matchedUser.status === 'inactive') {
    if (errorMsg) {
      errorMsg.style.display = 'block';
      errorMsg.textContent = '⛔ Conta de usuário inativa ou bloqueada!';
    }
    return;
  }

  setCurrentUser(matchedUser);
  if (errorMsg) errorMsg.style.display = 'none';
  checkAuthentication();
  renderApp();
  if (window.showToast) window.showToast(`🟢 Bem-vindo(a), ${matchedUser.name}!`, 'success');
};

window.switchAuthTab = function(tab) {
  const tabLogin = document.getElementById('tab-auth-login');
  const tabRegister = document.getElementById('tab-auth-register');
  const formLogin = document.getElementById('auth-form-login');
  const formRegister = document.getElementById('auth-form-register');
  const loginErr = document.getElementById('auth-error-msg');
  const regErr = document.getElementById('reg-error-msg');

  if (loginErr) loginErr.style.display = 'none';
  if (regErr) regErr.style.display = 'none';

  if (tab === 'login') {
    if (tabLogin) { tabLogin.style.background = 'var(--primary)'; tabLogin.style.color = '#fff'; }
    if (tabRegister) { tabRegister.style.background = 'transparent'; tabRegister.style.color = 'var(--text-muted)'; }
    if (formLogin) formLogin.style.display = 'block';
    if (formRegister) formRegister.style.display = 'none';
    const userField = document.getElementById('auth-username');
    if (userField) userField.focus();
  } else {
    if (tabLogin) { tabLogin.style.background = 'transparent'; tabLogin.style.color = 'var(--text-muted)'; }
    if (tabRegister) { tabRegister.style.background = 'var(--primary)'; tabRegister.style.color = '#fff'; }
    if (formLogin) formLogin.style.display = 'none';
    if (formRegister) formRegister.style.display = 'block';
    const nameField = document.getElementById('reg-name');
    if (nameField) nameField.focus();
  }
};

window.handleRegisterSubmit = function(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById('reg-name');
  const usernameInput = document.getElementById('reg-username');
  const pwdInput = document.getElementById('reg-password');
  const pwdConfirmInput = document.getElementById('reg-password-confirm');
  const errorMsg = document.getElementById('reg-error-msg');

  const name = nameInput ? nameInput.value.trim() : '';
  const username = usernameInput ? usernameInput.value.trim().toLowerCase() : '';
  const pwd = pwdInput ? pwdInput.value : '';
  const pwdConfirm = pwdConfirmInput ? pwdConfirmInput.value : '';

  const showError = (msg) => {
    if (errorMsg) {
      errorMsg.style.display = 'block';
      errorMsg.textContent = '⚠️ ' + msg;
    }
  };

  if (!name || !username) {
    showError('Preencha seu Nome e o Nome de Usuário desejado.');
    return;
  }

  if (username === 'admin') {
    showError('O login "admin" é reservado para o Administrador Master.');
    return;
  }

  if (!pwd || pwd.length < 4) {
    showError('A senha criada deve ter no mínimo 4 caracteres.');
    return;
  }

  if (pwd !== pwdConfirm) {
    showError('A confirmação da senha não confere!');
    return;
  }

  const users = getUsers();
  const alreadyExists = users.some(u => u.username.toLowerCase() === username);
  if (alreadyExists) {
    showError(`O usuário "${username}" já está cadastrado. Escolha outro nome.`);
    return;
  }

  const newUser = {
    id: 'usr_' + Date.now(),
    name: name,
    username: username,
    password: pwd,
    role: 'viewer', // Automatic read-only / consulta mode
    status: 'active',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);

  // Auto login with new user
  setCurrentUser(newUser);
  if (errorMsg) errorMsg.style.display = 'none';
  checkAuthentication();
  renderApp();

  if (window.showToast) {
    window.showToast(`🟢 Cadastro realizado com sucesso! Bem-vindo(a), ${newUser.name}!`, 'success');
  }
};

window.toggleAuthPasswordVisibility = function(fieldId = 'auth-password') {
  const passwordInput = document.getElementById(fieldId);
  if (!passwordInput) return;
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
};

window.handleLogout = function() {
  setCurrentUser(null);
  const usernameInput = document.getElementById('auth-username');
  const passwordInput = document.getElementById('auth-password');
  if (passwordInput) passwordInput.value = '';
  if (usernameInput) usernameInput.value = '';
  window.switchAuthTab('login');
  checkAuthentication();
  if (window.showToast) window.showToast('🔒 Sessão encerrada com sucesso.', 'info');
};

const state = {
  currentTab: 'dashboard',
  searchQuery: '',
  categoryFilter: 'all',
  statusFilter: 'all',
  sortBy: 'name',
  editingProductId: null,
  editingUserId: null
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  setupNavigation();
  setupEventListeners();
  populateCategorySelects();
  populateSupplierSelects();
  
  if (checkAuthentication()) {
    renderApp();
    updateOnlineHeartbeat();
  }

  // Real-time online heartbeat cycle (every 15 seconds)
  setInterval(updateOnlineHeartbeat, 15000);
  window.addEventListener('beforeunload', removeCurrentOnlineSession);
  window.addEventListener('focus', updateOnlineHeartbeat);
});

function initIcons() {
  if (window.lucide) {
    try {
      window.lucide.createIcons();
    } catch (e) {
      console.warn('Lucide icons render warning:', e);
    }
  }
}

function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-item button');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-tab');
      if (!tabTarget) return;

      // Block non-admin from opening users tab
      if (tabTarget === 'users' && !isAdmin()) {
        showToast('🔒 Acesso restrito: Somente administradores podem gerenciar usuários.', 'warning');
        return;
      }

      document.querySelectorAll('.nav-item').forEach(li => li.classList.remove('active'));
      btn.parentElement.classList.add('active');

      document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
      const activeSection = document.getElementById(`view-${tabTarget}`);
      if (activeSection) {
        activeSection.classList.add('active');
      }

      state.currentTab = tabTarget;
      renderApp();
    });
  });
}

function renderApp() {
  updateGlobalStats();
  applyPermissionVisibility();
  
  if (state.currentTab === 'dashboard') {
    renderDashboard();
  } else if (state.currentTab === 'inventory') {
    renderInventoryTable();
  } else if (state.currentTab === 'transactions') {
    renderTransactionsTable();
  } else if (state.currentTab === 'categories') {
    renderCategoriesView();
  } else if (state.currentTab === 'reports') {
    renderReportsView();
  } else if (state.currentTab === 'users') {
    if (isAdmin()) {
      renderUsersView();
    } else {
      state.currentTab = 'dashboard';
      renderDashboard();
    }
  }

  setTimeout(initIcons, 50);
}

function updateGlobalStats() {
  const stats = getInventoryStats();

  const elTotalVal = document.getElementById('stat-total-value');
  const elTotalItems = document.getElementById('stat-total-items');
  const elLowStock = document.getElementById('stat-low-stock');
  const elOutOfStock = document.getElementById('stat-out-stock');
  const elNotificationBadge = document.getElementById('notification-badge');

  if (elTotalVal) elTotalVal.textContent = formatCurrency(stats.totalValue);
  if (elTotalItems) elTotalItems.textContent = `${stats.totalItemsQuantity} unid. (${stats.totalProductsCount} itens)`;
  if (elLowStock) elLowStock.textContent = stats.lowStockCount;
  if (elOutOfStock) elOutOfStock.textContent = stats.outOfStockCount;

  if (elNotificationBadge) {
    elNotificationBadge.style.display = (stats.lowStockCount + stats.outOfStockCount > 0) ? 'block' : 'none';
  }
}

function renderDashboard() {
  const products = getProducts();
  const transactions = getTransactions();

  renderDashboardCharts(products, transactions);

  const criticalProducts = products.filter(p => p.quantity <= p.minQuantity);
  const tbody = document.getElementById('critical-stock-tbody');

  if (tbody) {
    if (criticalProducts.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">
            ✅ Nenhum item com estoque crítico no momento. Excelente trabalho!
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = criticalProducts.map(p => {
        const isZero = p.quantity === 0;
        return `
          <tr>
            <td>
              <div class="product-cell">
                <div class="product-img">${p.icon || '📦'}</div>
                <div class="product-details">
                  <span class="product-name">${p.name}</span>
                  <span class="product-sku">${p.sku}</span>
                </div>
              </div>
            </td>
            <td>${p.category}</td>
            <td>
              <span style="font-weight: 700; color: ${isZero ? 'var(--danger)' : 'var(--warning)'};">
                ${p.quantity} / ${p.minQuantity} min
              </span>
            </td>
            <td>
              <span class="badge ${isZero ? 'badge-danger' : 'badge-warning'}">
                <span class="badge-dot-sm"></span>
                ${isZero ? 'Esgotado' : 'Estoque Baixo'}
              </span>
            </td>
            <td>
              ${isAdmin() ? `
                <button class="btn btn-sm btn-primary" onclick="window.openTransactionModalFor('${p.id}', 'IN')">
                  <i data-lucide="plus"></i> Repor Estoque
                </button>
              ` : `
                <span style="font-size: 0.75rem; color: var(--warning); font-weight: 500;">
                  ⚠️ Reposição Necessária
                </span>
              `}
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  const recentList = document.getElementById('recent-activity-list');
  if (recentList) {
    const recentTx = transactions.slice(0, 5);
    if (recentTx.length === 0) {
      recentList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">Nenhuma movimentação registrada.</p>`;
    } else {
      recentList.innerHTML = recentTx.map(t => {
        const isIN = t.type === 'IN';
        return `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border);">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 32px; height: 32px; border-radius: 50%; background: ${isIN ? 'var(--success-bg)' : 'var(--danger-bg)'}; color: ${isIN ? 'var(--success)' : 'var(--danger)'}; display: flex; align-items: center; justify-content: center; font-weight: 700;">
                ${isIN ? '+' : '-'}
              </div>
              <div>
                <div style="font-size: 0.875rem; font-weight: 600; color: var(--text-main);">${t.productName}</div>
                <div style="font-size: 0.75rem; color: var(--text-dark);">${t.reason || 'Movimentação'} • ${t.user}</div>
              </div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.875rem; font-weight: 700; color: ${isIN ? 'var(--success)' : 'var(--danger)'};">
                ${isIN ? '+' : '-'}${t.quantity}
              </div>
              <div style="font-size: 0.7rem; color: var(--text-dark);">${formatDate(t.timestamp)}</div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}

window.filterInventoryByCategory = function(categoryName) {
  state.categoryFilter = categoryName;
  state.currentTab = 'inventory';

  document.querySelectorAll('.nav-item').forEach(li => li.classList.remove('active'));
  const invBtn = document.getElementById('nav-btn-inventory');
  if (invBtn) invBtn.parentElement.classList.add('active');

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const activeSection = document.getElementById('view-inventory');
  if (activeSection) activeSection.classList.add('active');

  const select = document.getElementById('filter-category');
  if (select) select.value = categoryName;

  renderApp();
};

function renderCategoryPills() {
  const pillsContainer = document.getElementById('quick-category-pills');
  if (!pillsContainer) return;

  const categories = getCategories();
  const allCategories = [{ name: 'all', label: 'Todas as Categorias' }, ...categories.map(c => ({ name: c.name, label: c.name }))];

  pillsContainer.innerHTML = allCategories.map(c => {
    const isActive = state.categoryFilter === c.name;
    const btnClass = isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-secondary';
    return `<button class="${btnClass}" onclick="window.filterInventoryByCategory('${c.name}')">${c.label}</button>`;
  }).join('');
}

function renderInventoryTable() {
  renderCategoryPills();
  let products = getProducts();

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    products = products.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.sku.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.supplier && p.supplier.toLowerCase().includes(q)) ||
      (p.location && p.location.toLowerCase().includes(q)) ||
      (p.notes && p.notes.toLowerCase().includes(q)) ||
      (p.inventoryCodes && p.inventoryCodes.some(c => c.toLowerCase().includes(q)))
    );
  }

  if (state.categoryFilter !== 'all') {
    const targetFilter = state.categoryFilter.toLowerCase();
    products = products.filter(p => 
      p.category === state.categoryFilter || 
      (p.category && p.category.toLowerCase().includes(targetFilter))
    );
  }

  if (state.statusFilter === 'low') {
    products = products.filter(p => p.quantity > 0 && p.quantity <= p.minQuantity);
  } else if (state.statusFilter === 'out') {
    products = products.filter(p => p.quantity === 0);
  } else if (state.statusFilter === 'ok') {
    products = products.filter(p => p.quantity > p.minQuantity);
  }

  products.sort((a, b) => {
    if (state.sortBy === 'name') return a.name.localeCompare(b.name);
    if (state.sortBy === 'sku') return a.sku.localeCompare(b.sku);
    if (state.sortBy === 'quantity') return b.quantity - a.quantity;
    if (state.sortBy === 'value') return (b.quantity * b.unitPrice) - (a.quantity * a.unitPrice);
    return 0;
  });

  const tbody = document.getElementById('inventory-tbody');
  const counterLabel = document.getElementById('inventory-count-label');

  if (counterLabel) {
    counterLabel.textContent = `Exibindo ${products.length} de ${getProducts().length} produtos`;
  }

  if (tbody) {
    if (products.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; color: var(--text-muted); padding: 3rem;">
            🔍 Nenhum produto encontrado com os filtros selecionados.
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = products.map(p => {
        const totalVal = p.quantity * p.unitPrice;
        const statusBadge = getStatusBadge(p.quantity, p.minQuantity);

        const maxThreshold = Math.max(p.minQuantity * 3, 20);
        const fillPercent = Math.min(100, Math.round((p.quantity / maxThreshold) * 100));
        let fillColor = 'var(--success)';
        if (p.quantity === 0) fillColor = 'var(--danger)';
        else if (p.quantity <= p.minQuantity) fillColor = 'var(--warning)';

        const invCount = p.inventoryCodes ? p.inventoryCodes.length : p.quantity;
        const firstInv = (p.inventoryCodes && p.inventoryCodes.length > 0) ? p.inventoryCodes[0] : 'INV-000000';

        return `
          <tr>
            <td>
              <div class="product-cell">
                <div class="product-img">${p.icon || '📦'}</div>
                <div class="product-details">
                  <span class="product-name">${p.name}</span>
                  <span class="product-sku">${p.sku} ${p.nfNumber ? `<span class="badge badge-info" style="font-size: 0.65rem; margin-left: 0.35rem; font-weight: 500;">📄 NF: ${p.nfNumber}</span>` : ''}</span>
                  <div style="margin-top: 0.25rem;">
                    <button class="btn btn-sm btn-secondary" onclick="window.openInvTagsModal('${p.id}')" style="font-size: 0.7rem; padding: 0.15rem 0.45rem; border-color: rgba(14, 165, 233, 0.4); color: var(--primary);" title="Ver todos os ${invCount} números de inventário (INV)">
                      🏷️ ${invCount} N°s INV (${firstInv})
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td><span style="font-size: 0.85rem; color: var(--text-muted);">${p.category}</span></td>
            <td>
              <div class="stock-level-container">
                <span class="stock-text"><strong>${p.quantity}</strong> (Min: ${p.minQuantity})</span>
                <div class="stock-level-bar">
                  <div class="stock-level-fill" style="width: ${fillPercent}%; background: ${fillColor};"></div>
                </div>
              </div>
            </td>
            <td>${statusBadge}</td>
            <td>${formatCurrency(p.unitPrice)}</td>
            <td><strong>${formatCurrency(totalVal)}</strong></td>
            <td><span style="font-size: 0.775rem; color: var(--text-dark);">${p.location || 'N/D'}</span></td>
            <td>
              ${isAdmin() ? `
                <div style="display: flex; gap: 0.35rem;">
                  <button class="btn btn-sm btn-secondary" onclick="window.openTransactionModalFor('${p.id}', 'IN')" title="Dar Entrada">
                    <i data-lucide="plus-circle"></i>
                  </button>
                  <button class="btn btn-sm btn-secondary" onclick="window.openTransactionModalFor('${p.id}', 'OUT')" title="Registrar Saída">
                    <i data-lucide="minus-circle"></i>
                  </button>
                  <button class="btn btn-sm btn-secondary" onclick="window.openEditProductModal('${p.id}')" title="Editar Produto">
                    <i data-lucide="edit-3"></i>
                  </button>
                  <button class="btn btn-sm btn-secondary" onclick="window.confirmDeleteProduct('${p.id}')" title="Excluir" style="color: var(--danger);">
                    <i data-lucide="trash-2"></i>
                  </button>
                </div>
              ` : `
                <span style="font-size: 0.75rem; color: var(--text-muted);">
                  <i data-lucide="lock" style="width:12px;height:12px;display:inline-block;vertical-align:middle;"></i> Somente Consulta
                </span>
              `}
            </td>
          </tr>
        `;
      }).join('');
    }
  }
}

function renderTransactionsTable() {
  const transactions = getTransactions();
  const tbody = document.getElementById('transactions-tbody');

  if (tbody) {
    if (transactions.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 3rem;">
            Nenhuma movimentação registrada até o momento.
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = transactions.map(t => {
        const isIN = t.type === 'IN';
        return `
          <tr>
            <td><span style="font-family: monospace; font-size: 0.775rem; color: var(--text-dark);">${t.id}</span></td>
            <td>
              <div><strong>${t.productName}</strong></div>
              <div style="font-size: 0.75rem; color: var(--text-dark);">${t.productSku}</div>
            </td>
            <td>
              <span class="badge ${isIN ? 'badge-success' : 'badge-danger'}">
                <span class="badge-dot-sm"></span>
                ${isIN ? 'ENTRADA' : 'SAÍDA'}
              </span>
            </td>
            <td><strong style="color: ${isIN ? 'var(--success)' : 'var(--danger)'};">${isIN ? '+' : '-'}${t.quantity}</strong></td>
            <td><span style="font-size: 0.8rem; color: var(--text-muted);">${t.previousQuantity} ➔ ${t.newQuantity}</span></td>
            <td>${t.reason || '-'}</td>
            <td>
              <div>${t.user}</div>
              <div style="font-size: 0.725rem; color: var(--text-dark);">${formatDate(t.timestamp)}</div>
            </td>
            <td>
              ${isAdmin() ? `
                <div style="display: flex; gap: 0.25rem;">
                  <button class="btn btn-sm btn-secondary" onclick="window.openEditTransactionModal('${t.id}')" title="Editar Movimentação"><i data-lucide="edit-3"></i> Editar</button>
                  <button class="btn btn-sm btn-secondary" onclick="window.confirmDeleteTransaction('${t.id}')" title="Excluir Lançamento" style="color: var(--danger);"><i data-lucide="trash-2"></i> Excluir</button>
                </div>
              ` : `
                <span style="font-size: 0.75rem; color: var(--text-muted);"><i data-lucide="check" style="width:12px;height:12px;display:inline-block;vertical-align:middle;"></i> Registrado</span>
              `}
            </td>
          </tr>
        `;
      }).join('');
    }
  }
}



/* Main Subview Switcher: Categorias de Produtos vs Fornecedores Cadastrados */
window.switchCategoriesSubView = function(mode) {
  const btnCat = document.getElementById('btn-subview-categories');
  const btnSup = document.getElementById('btn-subview-suppliers');
  const viewCat = document.getElementById('subview-categories-content');
  const viewSup = document.getElementById('subview-suppliers-content');

  if (mode === 'categories') {
    if (btnCat) btnCat.className = 'btn btn-sm btn-primary';
    if (btnSup) btnSup.className = 'btn btn-sm btn-secondary';
    if (viewCat) viewCat.style.display = 'block';
    if (viewSup) viewSup.style.display = 'none';
  } else {
    if (btnCat) btnCat.className = 'btn btn-sm btn-secondary';
    if (btnSup) btnSup.className = 'btn btn-sm btn-primary';
    if (viewCat) viewCat.style.display = 'none';
    if (viewSup) viewSup.style.display = 'block';
  }
};

/* Category Subtabs Filter Handler */
window.selectCategorySubtab = function(key) {
  const subtabButtons = document.querySelectorAll('.category-subtabs-bar button');
  subtabButtons.forEach(btn => {
    btn.className = 'btn btn-sm btn-secondary';
  });

  const activeBtn = document.getElementById(`cat-tab-${key}`);
  if (activeBtn) activeBtn.className = 'btn btn-sm btn-primary';

  const categoryKeyMap = {
    'eletronicos': 'Eletrônicos & Informática',
    'perifericos': 'Periféricos & Acessórios',
    'moveis': 'Móveis & Utensílios',
    'armazenamento': 'Armazenamento & Memória',
    'cabos': 'Cabos & Conectividade',
    'impressoras': 'Impressoras & Scanners'
  };

  const targetCategoryName = categoryKeyMap[key];
  const allPanels = document.querySelectorAll('.category-card-panel');

  allPanels.forEach(panel => {
    if (key === 'all') {
      panel.style.display = 'block';
    } else {
      const panelCat = panel.getAttribute('data-category');
      if (panelCat === targetCategoryName) {
        panel.style.display = 'block';
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        panel.style.display = 'none';
      }
    }
  });
};

function renderCategoriesView() {
  const categories = getCategories();
  const products = getProducts();
  const suppliers = getSuppliers();

  const container = document.getElementById('categories-dynamic-container');
  if (container) {
    if (categories.length === 0) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 3rem;">Nenhuma categoria cadastrada.</div>`;
    } else {
      container.innerHTML = categories.map(cat => {
        let catProducts = products.filter(p => p.category === cat.name);
        if (state.searchQuery.trim()) {
          const q = state.searchQuery.toLowerCase();
          catProducts = catProducts.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.sku.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            (p.supplier && p.supplier.toLowerCase().includes(q)) ||
            (p.location && p.location.toLowerCase().includes(q)) ||
            (p.notes && p.notes.toLowerCase().includes(q))
          );
        }

        const totalQty = catProducts.reduce((sum, p) => sum + Number(p.quantity), 0);
        const totalVal = catProducts.reduce((sum, p) => sum + (Number(p.quantity) * Number(p.unitPrice)), 0);

        let rowsHtml = '';
        if (catProducts.length === 0) {
          rowsHtml = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">Nenhum produto cadastrado nesta categoria.</td></tr>`;
        } else {
          rowsHtml = catProducts.map(p => `
            <tr>
              <td>
                <div class="product-cell">
                  <div class="product-img">${p.icon || '📦'}</div>
                  <div>
                    <strong>${p.name}</strong>
                    <div style="font-size: 0.725rem; color: var(--text-dark);">${p.sku}</div>
                  </div>
                </div>
              </td>
              <td><span style="font-family: monospace; font-size: 0.75rem;">${p.sku}</span></td>
              <td><strong>${p.quantity}</strong> / ${p.minQuantity} min</td>
              <td>${getStatusBadge(p.quantity, p.minQuantity)}</td>
              <td>${formatCurrency(p.unitPrice)}</td>
              <td><strong>${formatCurrency(p.quantity * p.unitPrice)}</strong></td>
              <td>
                ${isAdmin() ? `
                  <div style="display: flex; gap: 0.25rem;">
                    <button class="btn btn-sm btn-secondary" onclick="window.openTransactionModalFor('${p.id}', 'IN')" title="Repor (+)"><i data-lucide="plus-circle"></i> Repor</button>
                    <button class="btn btn-sm btn-secondary" onclick="window.openTransactionModalFor('${p.id}', 'OUT')" title="Baixa (-)"><i data-lucide="minus-circle"></i> Baixa</button>
                    <button class="btn btn-sm btn-secondary" onclick="window.openEditProductModal('${p.id}')" title="Editar"><i data-lucide="edit-3"></i></button>
                    <button class="btn btn-sm btn-secondary" onclick="window.confirmDeleteProduct('${p.id}')" title="Excluir" style="color: var(--danger);"><i data-lucide="trash-2"></i></button>
                  </div>
                ` : `
                  <span style="font-size: 0.75rem; color: var(--text-muted);"><i data-lucide="lock" style="width:12px;height:12px;display:inline-block;vertical-align:middle;"></i> Somente Consulta</span>
                `}
              </td>
            </tr>
          `).join('');
        }

        return `
          <div class="chart-card category-card-panel" data-category="${cat.name}" style="border-left: 4px solid var(--primary);">
            <div class="chart-header" style="margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
              <div style="display: flex; align-items: center; gap: 0.85rem;">
                <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: rgba(14, 165, 233, 0.15); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.35rem;">
                  <i data-lucide="${cat.icon || 'folder'}"></i>
                </div>
                <div>
                  <h3 style="font-size: 1.15rem; color: var(--text-main); font-weight: 600; margin: 0;">${cat.name}</h3>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.15rem;">${catProducts.length} tipos de produtos (${totalQty} unidades em estoque)</p>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                <span style="font-size: 1.05rem; font-weight: 700; color: var(--success); margin-right: 0.5rem;">${formatCurrency(totalVal)}</span>
                <button class="btn btn-sm btn-secondary" onclick="window.filterInventoryByCategory('${cat.name}')" title="Abrir no Catálogo Geral">
                  📋 Ver no Inventário
                </button>
                ${isAdmin() ? `
                  <button class="btn btn-sm btn-primary" onclick="window.openAddProductModal()" title="Cadastrar Produto">
                    <i data-lucide="plus"></i> Adicionar Item
                  </button>
                ` : ''}
              </div>
            </div>
            <div class="table-container" style="margin-bottom: 0;">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>SKU</th>
                    <th>Estoque</th>
                    <th>Status</th>
                    <th>Preço Unit.</th>
                    <th>Valor Total</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  ${rowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  const supContainer = document.getElementById('suppliers-tbody');
  if (supContainer) {
    if (suppliers.length === 0) {
      supContainer.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">
            Nenhum fornecedor cadastrado. Clique no botão "+ Cadastrar Fornecedor" para adicionar.
          </td>
        </tr>
      `;
    } else {
      supContainer.innerHTML = suppliers.map(s => `
        <tr>
          <td><strong>${s.name}</strong></td>
          <td>${s.contactPerson || '-'}</td>
          <td>${s.email || '-'}</td>
          <td>${s.phone || '-'}</td>
          <td>
            <button class="btn btn-sm btn-secondary" onclick="window.confirmDeleteSupplier('${s.id}')" title="Excluir Fornecedor" style="color: var(--danger);">
              <i data-lucide="trash-2"></i> Excluir
            </button>
          </td>
        </tr>
      `).join('');
    }
  }
}

function renderReportsView() {
  const stats = getInventoryStats();
  const products = getProducts();

  const reportTotalVal = document.getElementById('report-total-val');
  const reportTotalQty = document.getElementById('report-total-qty');
  const reportLowCount = document.getElementById('report-low-count');

  if (reportTotalVal) reportTotalVal.textContent = formatCurrency(stats.totalValue);
  if (reportTotalQty) reportTotalQty.textContent = stats.totalItemsQuantity;
  if (reportLowCount) reportLowCount.textContent = stats.lowStockCount + stats.outOfStockCount;

  const topValuable = [...products].sort((a, b) => (b.quantity * b.unitPrice) - (a.quantity * a.unitPrice)).slice(0, 5);
  const topValTbody = document.getElementById('top-valuable-tbody');
  if (topValTbody) {
    topValTbody.innerHTML = topValuable.map(p => `
      <tr>
        <td><strong>${p.name}</strong> (${p.sku})</td>
        <td>${p.category}</td>
        <td>${p.quantity}</td>
        <td>${formatCurrency(p.unitPrice)}</td>
        <td><strong>${formatCurrency(p.quantity * p.unitPrice)}</strong></td>
      </tr>
    `).join('');
  }
}

function setupEventListeners() {
  window.switchTab = function(tabName) {
    state.currentTab = tabName;
    document.querySelectorAll('.nav-item').forEach(li => li.classList.remove('active'));
    const navBtn = document.getElementById(`nav-btn-${tabName}`);
    if (navBtn) navBtn.parentElement.classList.add('active');

    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    const activeSection = document.getElementById(`view-${tabName}`);
    if (activeSection) activeSection.classList.add('active');

    renderApp();
  };

  const handleSearchInput = (val) => {
    state.searchQuery = val;

    const gSearch = document.getElementById('global-search');
    const iSearch = document.getElementById('inventory-search');
    if (gSearch && gSearch.value !== val) gSearch.value = val;
    if (iSearch && iSearch.value !== val) iSearch.value = val;

    if (val.trim().length > 0 && state.currentTab !== 'inventory' && state.currentTab !== 'categories') {
      window.switchTab('inventory');
    } else {
      renderApp();
    }
  };

  const globalSearchInput = document.getElementById('global-search');
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
    globalSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') handleSearchInput('');
    });
  }

  const invSearchInput = document.getElementById('inventory-search');
  if (invSearchInput) {
    invSearchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
    invSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') handleSearchInput('');
    });
  }

  const invCategorySelect = document.getElementById('filter-category');
  if (invCategorySelect) {
    invCategorySelect.addEventListener('change', (e) => {
      state.categoryFilter = e.target.value;
      renderInventoryTable();
    });
  }

  const invStatusSelect = document.getElementById('filter-status');
  if (invStatusSelect) {
    invStatusSelect.addEventListener('change', (e) => {
      state.statusFilter = e.target.value;
      renderInventoryTable();
    });
  }

  const invSortSelect = document.getElementById('filter-sort');
  if (invSortSelect) {
    invSortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderInventoryTable();
    });
  }

  const productForm = document.getElementById('product-form');
  if (productForm) {
    productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveProductFromForm();
    });
  }

  const transactionForm = document.getElementById('transaction-form');
  if (transactionForm) {
    transactionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      processStockMovement();
    });
  }

  const editTransactionForm = document.getElementById('edit-transaction-form');
  if (editTransactionForm) {
    editTransactionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveEditTransactionFromForm();
    });
  }

  const supplierForm = document.getElementById('supplier-form');
  if (supplierForm) {
    supplierForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveSupplierFromForm();
    });
  }

  const resetBtn = document.getElementById('btn-reset-data');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja restaurar os dados de demonstração iniciais?')) {
        resetStorage();
        showToast('Dados restaurados com sucesso!', 'info');
        renderApp();
      }
    });
  }
}

function populateCategorySelects() {
  const categories = getCategories();
  const filterCatSelect = document.getElementById('filter-category');
  const formCatSelect = document.getElementById('product-category');

  if (filterCatSelect) {
    filterCatSelect.innerHTML = `<option value="all">Todas as Categorias</option>` +
      categories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  }

  if (formCatSelect) {
    formCatSelect.innerHTML = `<option value="">Selecione uma Categoria</option>` +
      categories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  }
}

function populateSupplierSelects() {
  const suppliers = getSuppliers();
  const formSupSelect = document.getElementById('product-supplier');
  if (formSupSelect) {
    formSupSelect.innerHTML = `<option value="">Selecione um Fornecedor</option>` +
      suppliers.map(s => `<option value="${s.name}">${s.name}</option>`).join('');
  }
}

window.switchProductModalTab = function(tabName) {
  const btnGeral = document.getElementById('modal-tab-btn-geral');
  const btnNf = document.getElementById('modal-tab-btn-nf');
  const contentGeral = document.getElementById('product-tab-content-geral');
  const contentNf = document.getElementById('product-tab-content-nf');

  if (tabName === 'geral') {
    if (btnGeral) btnGeral.className = 'modal-tab-btn active';
    if (btnNf) btnNf.className = 'modal-tab-btn';
    if (contentGeral) contentGeral.style.display = 'grid';
    if (contentNf) contentNf.style.display = 'none';
  } else {
    if (btnGeral) btnGeral.className = 'modal-tab-btn';
    if (btnNf) btnNf.className = 'modal-tab-btn active';
    if (contentGeral) contentGeral.style.display = 'none';
    if (contentNf) contentNf.style.display = 'grid';
  }
};

/* Modal Window Methods attached to window for direct HTML onclick binding */
window.openAddProductModal = function() {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Usuários em modo consulta não podem cadastrar produtos.', 'danger');
    return;
  }
  state.editingProductId = null;
  const modal = document.getElementById('product-modal');
  const title = document.getElementById('product-modal-title');
  const form = document.getElementById('product-form');

  if (form) form.reset();
  if (title) title.textContent = 'Novo Produto';
  
  document.getElementById('product-sku').value = 'PROD-' + Math.floor(1000 + Math.random() * 9000);

  // Clear NF fields
  document.getElementById('product-nf-number').value = '';
  document.getElementById('product-nf-series').value = '';
  document.getElementById('product-nf-key').value = '';
  document.getElementById('product-nf-date').value = '';
  document.getElementById('product-nf-total').value = '';
  document.getElementById('product-nf-cnpj').value = '';
  document.getElementById('product-nf-link').value = '';
  document.getElementById('product-nf-notes').value = '';

  window.switchProductModalTab('geral');
  if (modal) modal.classList.add('active');
};

window.openEditProductModal = function(productId) {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Usuários em modo consulta não podem editar produtos.', 'danger');
    return;
  }
  const product = getProductById(productId);
  if (!product) return;

  state.editingProductId = productId;
  const modal = document.getElementById('product-modal');
  const title = document.getElementById('product-modal-title');

  if (title) title.textContent = 'Editar Produto';

  document.getElementById('product-sku').value = product.sku || '';
  document.getElementById('product-name').value = product.name || '';
  document.getElementById('product-category').value = product.category || '';
  document.getElementById('product-quantity').value = product.quantity || 0;
  document.getElementById('product-min-quantity').value = product.minQuantity || 0;
  document.getElementById('product-price').value = product.unitPrice || 0;
  document.getElementById('product-supplier').value = product.supplier || '';
  document.getElementById('product-location').value = product.location || '';
  document.getElementById('product-icon').value = product.icon || '📦';

  // Load NF fields
  document.getElementById('product-nf-number').value = product.nfNumber || '';
  document.getElementById('product-nf-series').value = product.nfSeries || '';
  document.getElementById('product-nf-key').value = product.nfKey || '';
  document.getElementById('product-nf-date').value = product.nfDate || '';
  document.getElementById('product-nf-total').value = product.nfTotal || '';
  document.getElementById('product-nf-cnpj').value = product.nfCnpj || '';
  document.getElementById('product-nf-link').value = product.nfLink || '';
  document.getElementById('product-nf-notes').value = product.nfNotes || '';

  window.switchProductModalTab('geral');
  if (modal) modal.classList.add('active');
};

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('active');
  state.editingProductId = null;
}

function saveProductFromForm() {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Usuários em modo consulta não podem salvar alterações.', 'danger');
    return;
  }
  const sku = document.getElementById('product-sku').value.trim();
  const name = document.getElementById('product-name').value.trim();
  const category = document.getElementById('product-category').value;
  const quantity = parseInt(document.getElementById('product-quantity').value, 10) || 0;
  const minQuantity = parseInt(document.getElementById('product-min-quantity').value, 10) || 0;
  const unitPrice = parseFloat(document.getElementById('product-price').value) || 0;
  const supplier = document.getElementById('product-supplier').value;
  const location = document.getElementById('product-location').value.trim();
  const icon = document.getElementById('product-icon').value.trim() || '📦';

  // Read NF fields
  const nfNumber = document.getElementById('product-nf-number').value.trim();
  const nfSeries = document.getElementById('product-nf-series').value.trim();
  const nfKey = document.getElementById('product-nf-key').value.trim();
  const nfDate = document.getElementById('product-nf-date').value;
  const nfTotal = parseFloat(document.getElementById('product-nf-total').value) || 0;
  const nfCnpj = document.getElementById('product-nf-cnpj').value.trim();
  const nfLink = document.getElementById('product-nf-link').value.trim();
  const nfNotes = document.getElementById('product-nf-notes').value.trim();

  if (!name || !sku || !category) {
    showToast('Por favor, preencha todos os campos obrigatórios.', 'danger');
    return;
  }

  const productData = {
    id: state.editingProductId,
    sku,
    name,
    category,
    quantity,
    minQuantity,
    unitPrice,
    supplier,
    location,
    icon,
    nfNumber,
    nfSeries,
    nfKey,
    nfDate,
    nfTotal,
    nfCnpj,
    nfLink,
    nfNotes
  };

  saveProduct(productData);
  closeProductModal();
  showToast(state.editingProductId ? 'Produto atualizado com sucesso!' : 'Produto criado com sucesso!', 'success');
  renderApp();
}

window.openTransactionModal = function() {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Usuários em modo consulta não podem registrar movimentações.', 'danger');
    return;
  }
  populateProductSelectForTransaction();
  const modal = document.getElementById('transaction-modal');
  if (modal) modal.classList.add('active');
};

window.openTransactionModalFor = function(productId, type = 'IN') {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Usuários em modo consulta não podem alterar estoque.', 'danger');
    return;
  }
  populateProductSelectForTransaction(productId);
  document.getElementById('tx-type').value = type;
  const modal = document.getElementById('transaction-modal');
  if (modal) modal.classList.add('active');
};

window.closeTransactionModal = function() {
  const modal = document.getElementById('transaction-modal');
  if (modal) modal.classList.remove('active');
};

function populateProductSelectForTransaction(selectedId = null) {
  const products = getProducts();
  const select = document.getElementById('tx-product');
  if (select) {
    select.innerHTML = `<option value="">Selecione o Produto</option>` +
      products.map(p => `
        <option value="${p.id}" ${p.id === selectedId ? 'selected' : ''}>
          ${p.name} (${p.sku}) - Atual: ${p.quantity} unid.
        </option>
      `).join('');
  }
}

function processStockMovement() {
  const productId = document.getElementById('tx-product').value;
  const type = document.getElementById('tx-type').value;
  const quantity = Number(document.getElementById('tx-quantity').value);
  const reason = document.getElementById('tx-reason').value.trim();

  if (!productId || !type || !quantity) {
    showToast('Preencha os campos da movimentação.', 'danger');
    return;
  }

  try {
    const result = recordStockMovement({
      productId,
      type,
      quantity,
      reason,
      user: 'Administrador'
    });

    closeTransactionModal();
    showToast(
      `Movimentação registrada! Novo saldo de ${result.product.name}: ${result.product.quantity} unidades.`,
      'success'
    );
    renderApp();
  } catch (err) {
    showToast(`Erro na movimentação: ${err.message}`, 'danger');
  }
}

/* Edit & Delete Transaction Handlers */
window.openEditTransactionModal = function(txId) {
  const transactions = getTransactions();
  const tx = transactions.find(t => t.id === txId);
  if (!tx) return;

  document.getElementById('edit-tx-id').value = tx.id;
  document.getElementById('edit-tx-product-name').value = `${tx.productName} (${tx.productSku})`;
  document.getElementById('edit-tx-type').value = tx.type;
  document.getElementById('edit-tx-quantity').value = tx.quantity;
  document.getElementById('edit-tx-reason').value = tx.reason || '';
  document.getElementById('edit-tx-user').value = tx.user || 'Administrador';

  const modal = document.getElementById('edit-transaction-modal');
  if (modal) modal.classList.add('active');
};

window.closeEditTransactionModal = function() {
  const modal = document.getElementById('edit-transaction-modal');
  if (modal) modal.classList.remove('active');
};

function saveEditTransactionFromForm() {
  const txId = document.getElementById('edit-tx-id').value;
  const newType = document.getElementById('edit-tx-type').value;
  const newQty = Number(document.getElementById('edit-tx-quantity').value);
  const newReason = document.getElementById('edit-tx-reason').value.trim();
  const newUser = document.getElementById('edit-tx-user').value.trim();

  if (!txId || newQty < 1 || !newReason || !newUser) {
    showToast('Preencha todos os campos obrigatórios da movimentação.', 'danger');
    return;
  }

  const transactions = getTransactions();
  const txIndex = transactions.findIndex(t => t.id === txId);
  if (txIndex === -1) return;

  const tx = transactions[txIndex];
  const products = getProducts();
  const product = products.find(p => p.id === tx.productId);

  const oldDelta = tx.type === 'IN' ? Number(tx.quantity) : -Number(tx.quantity);
  const newDelta = newType === 'IN' ? newQty : -newQty;
  const diff = newDelta - oldDelta;

  if (product) {
    if (Number(product.quantity) + diff < 0) {
      showToast('Operação cancelada: O estoque do produto ficaria negativo.', 'danger');
      return;
    }
    product.quantity = Number(product.quantity) + diff;
    saveProduct(product);
  }

  tx.type = newType;
  tx.quantity = newQty;
  tx.newQuantity = tx.previousQuantity + newDelta;
  tx.reason = newReason;
  tx.user = newUser;

  transactions[txIndex] = tx;
  localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));

  window.closeEditTransactionModal();
  showToast('Movimentação atualizada e saldo recalculado com sucesso!', 'success');
  renderApp();
}

window.confirmDeleteTransaction = function(txId) {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Usuários em modo consulta não podem excluir movimentações.', 'danger');
    return;
  }
  const transactions = getTransactions();
  const tx = transactions.find(t => t.id === txId);
  if (!tx) return;

  if (confirm(`Tem certeza que deseja excluir a movimentação "${tx.id}" do produto ${tx.productName}?`)) {
    const products = getProducts();
    const product = products.find(p => p.id === tx.productId);

    if (product) {
      const deltaToReverse = tx.type === 'IN' ? Number(tx.quantity) : -Number(tx.quantity);
      if (Number(product.quantity) - deltaToReverse < 0) {
        showToast('Não foi possível excluir: O estoque ficaria negativo.', 'danger');
        return;
      }
      product.quantity = Number(product.quantity) - deltaToReverse;
      saveProduct(product);
    }

    const updatedTx = transactions.filter(t => t.id !== txId);
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(updatedTx));

    showToast('Lançamento excluído e saldo de estoque estornado com sucesso!', 'info');
    renderApp();
  }
};

window.confirmDeleteProduct = function(productId) {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Usuários em modo consulta não podem excluir produtos.', 'danger');
    return;
  }
  const product = getProductById(productId);
  if (!product) return;

  if (confirm(`Tem certeza que deseja remover o produto "${product.name}"?`)) {
    deleteProduct(productId);
    showToast('Produto excluído com sucesso.', 'info');
    renderApp();
  }
};

/* --- SUPPLIER MODAL & ACTION HANDLERS --- */
window.openAddSupplierModal = function() {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem cadastrar fornecedores.', 'danger');
    return;
  }
  const modal = document.getElementById('supplier-modal');
  const form = document.getElementById('supplier-form');
  if (form) form.reset();
  if (modal) modal.classList.add('active');
};

window.closeSupplierModal = function() {
  const modal = document.getElementById('supplier-modal');
  if (modal) modal.classList.remove('active');
};

function saveSupplierFromForm() {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem salvar fornecedores.', 'danger');
    return;
  }
  const name = document.getElementById('supplier-name').value.trim();
  const contactPerson = document.getElementById('supplier-contact').value.trim();
  const email = document.getElementById('supplier-email').value.trim();
  const phone = document.getElementById('supplier-phone').value.trim();

  if (!name) {
    showToast('Por favor, informe a Razão Social ou Nome do fornecedor.', 'danger');
    return;
  }

  saveSupplier({ name, contactPerson, email, phone });
  closeSupplierModal();
  populateSupplierSelects();
  showToast('Fornecedor cadastrado com sucesso!', 'success');
  renderApp();
}

window.confirmDeleteSupplier = function(supplierId) {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem excluir fornecedores.', 'danger');
    return;
  }
  const suppliers = getSuppliers();
  const supplier = suppliers.find(s => s.id === supplierId);
  if (!supplier) return;

  if (confirm(`Tem certeza que deseja excluir o fornecedor "${supplier.name}"?`)) {
    deleteSupplier(supplierId);
    populateSupplierSelects();
    showToast('Fornecedor removido com sucesso.', 'info');
    renderApp();
  }
};

/* --- IMPORT & EXPORT (EXCEL .XLSX / .XLS / .CSV FILES) --- */
window.triggerImportFile = function() {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Usuários em modo consulta não podem importar planilhas.', 'danger');
    return;
  }
  const fileInput = document.getElementById('file-import-input');
  if (fileInput) {
    fileInput.value = '';
    fileInput.click();
  }
};

window.handleImportFile = function(event) {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem importar dados.', 'danger');
    return;
  }
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const fileName = file.name.toLowerCase();

  // If XLSX library is available and it's an Excel file (.xlsx or .xls)
  if (typeof XLSX !== 'undefined' && (fileName.endsWith('.xlsx') || fileName.endsWith('.xls'))) {
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const importedCount = parseExcelJsonData(jsonData);
        showToast(`✅ Importação concluída! ${importedCount} produtos importados do Excel "${file.name}".`, 'success');
        renderApp();
      } catch (err) {
        console.error('Erro na importação Excel:', err);
        showToast(`Erro ao importar Excel: ${err.message}`, 'danger');
      }
    };
    reader.readAsArrayBuffer(file);
    return;
  }

  // Fallback for CSV / TXT files
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const content = e.target.result;
      const importedCount = parseAndImportData(content);
      showToast(`✅ Importação concluída! ${importedCount} produtos processados do arquivo "${file.name}".`, 'success');
      renderApp();
    } catch (err) {
      console.error('Erro na importação:', err);
      showToast(`Erro ao importar arquivo: ${err.message}`, 'danger');
    }
  };
  reader.readAsText(file, 'UTF-8');
};

function parseExcelJsonData(rows) {
  if (!rows || rows.length === 0) {
    throw new Error('A planilha está vazia.');
  }

  const existingProducts = getProducts();
  let count = 0;

  const headerRow = (rows[0] || []).map(h => String(h).toLowerCase().trim());
  const hasHeader = headerRow.some(h => h.includes('sku') || h.includes('nome') || h.includes('produto') || h.includes('categoria'));

  const startIndex = hasHeader ? 1 : 0;

  for (let i = startIndex; i < rows.length; i++) {
    const cols = rows[i];
    if (!cols || cols.length === 0 || cols.every(c => c === null || c === undefined || c === '')) continue;

    let sku = String(cols[0] || ('PROD-' + Math.floor(1000 + Math.random() * 9000))).trim();
    let name = String(cols[1] || ('Produto Importado ' + (i + 1))).trim();
    let category = String(cols[2] || 'Geral').trim();
    let quantity = Number(cols[3]) || 0;
    let minQuantity = Number(cols[4]) || 5;
    let unitPrice = parseFloat(String(cols[5] || '0').replace('R$', '').replace(',', '.')) || 0;
    let location = String(cols[7] || '').trim();
    let supplier = String(cols[8] || '').trim();

    const existingIndex = existingProducts.findIndex(p => 
      (p.sku && p.sku.toLowerCase() === sku.toLowerCase()) || 
      (p.name && p.name.toLowerCase() === name.toLowerCase())
    );

    if (existingIndex !== -1) {
      existingProducts[existingIndex].quantity = quantity;
      if (unitPrice > 0) existingProducts[existingIndex].unitPrice = unitPrice;
      if (category) existingProducts[existingIndex].category = category;
      if (supplier) existingProducts[existingIndex].supplier = supplier;
      if (location) existingProducts[existingIndex].location = location;
      existingProducts[existingIndex].updatedAt = new Date().toISOString();
    } else {
      existingProducts.unshift({
        id: 'prod-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        sku,
        name,
        category,
        quantity,
        minQuantity,
        unitPrice,
        location,
        supplier,
        icon: '📦',
        createdAt: new Date().toISOString()
      });
    }

    count++;
  }

  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(existingProducts));
  return count;
}

function parseAndImportData(text) {
  if (!text || !text.trim()) {
    throw new Error('O arquivo está vazio.');
  }

  let cleanText = text.replace(/^\uFEFF/, '');
  const lines = cleanText.split(/\r?\n/).filter(line => line.trim().length > 0);

  if (lines.length === 0) {
    throw new Error('Nenhuma linha válida encontrada.');
  }

  const sampleLine = lines[0];
  let delimiter = ',';
  if (sampleLine.includes(';')) delimiter = ';';
  else if (sampleLine.includes('\t')) delimiter = '\t';

  const parseRow = (rowStr) => {
    return rowStr.split(delimiter).map(cell => cell.replace(/^"(.*)"$/, '$1').trim());
  };

  const headerRow = parseRow(lines[0]).map(h => h.toLowerCase());
  const hasHeader = headerRow.some(h => h.includes('sku') || h.includes('nome') || h.includes('produto') || h.includes('categoria'));

  const startIndex = hasHeader ? 1 : 0;
  const existingProducts = getProducts();
  let count = 0;

  for (let i = startIndex; i < lines.length; i++) {
    const cols = parseRow(lines[i]);
    if (cols.length === 0 || cols.every(c => c === '')) continue;

    let sku = cols[0] || ('PROD-' + Math.floor(1000 + Math.random() * 9000));
    let name = cols[1] || ('Produto Importado ' + (i + 1));
    let category = cols[2] || 'Geral';
    let quantity = Number(cols[3]) || 0;
    let minQuantity = Number(cols[4]) || 5;
    let unitPrice = parseFloat(String(cols[5] || '0').replace('R$', '').replace(',', '.')) || 0;
    let location = cols[7] || '';
    let supplier = cols[8] || '';

    const existingIndex = existingProducts.findIndex(p => 
      (p.sku && p.sku.toLowerCase() === sku.toLowerCase()) || 
      (p.name && p.name.toLowerCase() === name.toLowerCase())
    );

    if (existingIndex !== -1) {
      existingProducts[existingIndex].quantity = quantity;
      if (unitPrice > 0) existingProducts[existingIndex].unitPrice = unitPrice;
      if (category) existingProducts[existingIndex].category = category;
      if (supplier) existingProducts[existingIndex].supplier = supplier;
      if (location) existingProducts[existingIndex].location = location;
      existingProducts[existingIndex].updatedAt = new Date().toISOString();
    } else {
      existingProducts.unshift({
        id: 'prod-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        sku,
        name,
        category,
        quantity,
        minQuantity,
        unitPrice,
        location,
        supplier,
        icon: '📦',
        createdAt: new Date().toISOString()
      });
    }

    count++;
  }

  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(existingProducts));
  return count;
}

/* Native Excel (.xlsx) Export Handler */
window.exportInventoryExcel = function() {
  const products = getProducts();
  if (products.length === 0) {
    showToast('Não há produtos para exportar.', 'warning');
    return;
  }

  const fileName = `estoque_stockmaster_${new Date().toISOString().slice(0, 10)}.xlsx`;

  // Native SheetJS (.xlsx) export
  if (typeof XLSX !== 'undefined') {
    try {
      const excelData = products.map(p => ({
        'SKU': p.sku || '',
        'Nome do Produto': p.name || '',
        'Categoria': p.category || '',
        'Quantidade em Estoque': Number(p.quantity) || 0,
        'Estoque Mínimo': Number(p.minQuantity) || 0,
        'Preço Unitário (R$)': Number(p.unitPrice) || 0,
        'Valor Total (R$)': (Number(p.quantity) || 0) * (Number(p.unitPrice) || 0),
        'Localização': p.location || '',
        'Fornecedor': p.supplier || '',
        'Nº Nota Fiscal': p.nfNumber || '',
        'Série NF': p.nfSeries || '',
        'Chave de Acesso NF-e': p.nfKey || '',
        'Data Emissão NF': p.nfDate || '',
        'CNPJ Emitente NF': p.nfCnpj || '',
        'Obs Fiscais': p.nfNotes || ''
      }));

      const worksheet = XLSX.utils.json_to_sheet(excelData);
      worksheet['!cols'] = [
        { wch: 15 }, { wch: 30 }, { wch: 25 },
        { wch: 20 }, { wch: 15 }, { wch: 18 },
        { wch: 18 }, { wch: 25 }, { wch: 25 },
        { wch: 15 }, { wch: 10 }, { wch: 45 },
        { wch: 15 }, { wch: 20 }, { wch: 30 }
      ];

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Estoque');
      XLSX.writeFile(workbook, fileName);

      showToast('Planilha Excel (.xlsx) exportada com sucesso!', 'success');
      return;
    } catch (err) {
      console.warn('Erro na geração XLSX, usando fallback:', err);
    }
  }

  // Fallback CSV with UTF-8 BOM
  const headers = ['SKU', 'Nome do Produto', 'Categoria', 'Quantidade em Estoque', 'Estoque Mínimo', 'Preço Unitário (R$)', 'Valor Total (R$)', 'Localização', 'Fornecedor'];
  const rows = products.map(p => [
    `"${p.sku}"`,
    `"${p.name}"`,
    `"${p.category}"`,
    p.quantity,
    p.minQuantity,
    p.unitPrice.toFixed(2),
    (p.quantity * p.unitPrice).toFixed(2),
    `"${p.location || ''}"`,
    `"${p.supplier || ''}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `estoque_stockmaster_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Planilha exportada com sucesso!', 'success');
};

// Alias exportInventoryCSV to exportInventoryExcel
window.exportInventoryCSV = window.exportInventoryExcel;

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconName = 'info';
  if (type === 'success') iconName = 'check-circle';
  if (type === 'warning') iconName = 'alert-triangle';
  if (type === 'danger') iconName = 'x-circle';

  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  initIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function formatCurrency(val) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0);
}

function formatDate(isoStr) {
  if (!isoStr) return '-';
  const d = new Date(isoStr);
  return d.toLocaleDateString('pt-BR') + ' às ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function getStatusBadge(qty, minQty) {
  if (qty === 0) {
    return `<span class="badge badge-danger"><span class="badge-dot-sm"></span> Esgotado</span>`;
  }
  if (qty <= minQty) {
    return `<span class="badge badge-warning"><span class="badge-dot-sm"></span> Estoque Baixo</span>`;
  }
  return `<span class="badge badge-success"><span class="badge-dot-sm"></span> Em Estoque</span>`;
}

/* Print View Handler */
window.printCurrentView = function() {
  const printDateEl = document.getElementById('print-date-display');
  if (printDateEl) {
    const now = new Date();
    printDateEl.textContent = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }
  window.print();
};

/* Clear Activity / Transactions History Handler */
window.clearActivityHistory = function() {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem apagar o histórico de atividades.', 'danger');
    return;
  }
  const transactions = getTransactions();
  if (transactions.length === 0) {
    showToast('O histórico de atividades já está vazio.', 'info');
    return;
  }

  if (confirm('Tem certeza que deseja apagar todo o histórico de últimas atividades e movimentações? Esta ação desfaz os registros de log.')) {
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify([]));
    showToast('Histórico de atividades e movimentações apagado com sucesso!', 'success');
    renderApp();
  }
};

/* Email Critical Products Report Generator & Handler */
window.generateCriticalReportText = function() {
  const products = getProducts();
  const criticalProducts = products.filter(p => Number(p.quantity) <= Number(p.minQuantity));
  const nowStr = new Date().toLocaleDateString('pt-BR') + ' às ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  const totalZero = criticalProducts.filter(p => Number(p.quantity) === 0).length;
  const totalLow = criticalProducts.filter(p => Number(p.quantity) > 0).length;

  let text = `==================================================\n`;
  text += `STOCKMASTER - RELATÓRIO DE PRODUTOS CRÍTICOS & REPOSIÇÃO\n`;
  text += `Data da Emissão: ${nowStr}\n`;
  text += `==================================================\n\n`;
  text += `ATENÇÃO LOGÍSTICA:\n`;
  text += `Os produtos listados abaixo atingiram o nível de estoque mínimo ou estão zerados e necessitam de reposição urgente.\n\n`;
  text += `--------------------------------------------------\n`;
  text += `RESUMO DOS ALERTAS:\n`;
  text += `- Total de Produtos em Estado Crítico: ${criticalProducts.length}\n`;
  text += `- Itens Zerados / Esgotados: ${totalZero}\n`;
  text += `- Itens em Nível de Estoque Baixo: ${totalLow}\n`;
  text += `--------------------------------------------------\n\n`;
  text += `LISTA DE ITENS PARA REPOSIÇÃO:\n\n`;

  if (criticalProducts.length === 0) {
    text += `(Nenhum produto em nível crítico no momento. Todos os itens estão com saldo normal.)\n`;
  } else {
    criticalProducts.forEach((p, idx) => {
      const isZero = Number(p.quantity) === 0;
      const statusText = isZero ? '🔴 ESGOTADO (0 UNIDADES)' : '🟡 ESTOQUE BAIXO';
      text += `${idx + 1}. ${p.icon || '📦'} ${p.name}\n`;
      text += `   - SKU: ${p.sku}\n`;
      text += `   - Categoria: ${p.category}\n`;
      text += `   - Saldo Atual: ${p.quantity} unid. (Estoque Mínimo: ${p.minQuantity} unid.)\n`;
      text += `   - Status: ${statusText}\n`;
      text += `   - Preço Unitário: R$ ${Number(p.unitPrice).toFixed(2)}\n`;
      if (p.supplier) text += `   - Fornecedor: ${p.supplier}\n`;
      if (p.location) text += `   - Localização: ${p.location}\n`;
      if (p.nfNumber) text += `   - Nota Fiscal Ref.: Nº ${p.nfNumber}\n`;
      text += `\n`;
    });
  }

  text += `--------------------------------------------------\n`;
  text += `Relatório gerado automaticamente pelo StockMaster Enterprise.\n`;
  return text;
};

window.openEmailReportModal = function(defaultEmail = 'out.logistica!@iatr.com.br') {
  const emailInput = document.getElementById('email-target');
  const previewInput = document.getElementById('email-body-preview');
  
  if (emailInput && defaultEmail) emailInput.value = defaultEmail;
  if (previewInput) previewInput.value = window.generateCriticalReportText();

  const modal = document.getElementById('email-report-modal');
  if (modal) modal.classList.add('active');
};

window.closeEmailReportModal = function() {
  const modal = document.getElementById('email-report-modal');
  if (modal) modal.classList.remove('active');
};

window.copyReportToClipboard = function() {
  const previewInput = document.getElementById('email-body-preview');
  if (!previewInput || !previewInput.value) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(previewInput.value).then(() => {
      showToast('📋 Relatório copiado para a área de transferência com sucesso!', 'success');
    }).catch(err => {
      showToast('Não foi possível copiar automaticamente.', 'warning');
    });
  } else {
    previewInput.select();
    document.execCommand('copy');
    showToast('📋 Relatório copiado com sucesso!', 'success');
  }
};

window.sendReportViaMailto = function() {
  const emailTarget = document.getElementById('email-target').value.trim();
  const subject = document.getElementById('email-subject').value.trim();
  const bodyText = document.getElementById('email-body-preview').value.trim();

  if (!emailTarget) {
    showToast('Informe o e-mail do destinatário.', 'danger');
    return;
  }

  const mailtoUrl = `mailto:${encodeURIComponent(emailTarget)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  
  window.location.href = mailtoUrl;
  showToast(`📧 Abrindo leitor de e-mail (Outlook/Gmail) para ${emailTarget}...`, 'success');
};

/* Inventory Tags (INV) Modal Handlers */
let currentInvModalProductId = null;

window.openInvTagsModal = function(productId) {
  currentInvModalProductId = productId;
  const product = getProductById(productId);
  if (!product) return;

  const modal = document.getElementById('inv-tags-modal');
  const nameEl = document.getElementById('inv-modal-prod-name');
  const metaEl = document.getElementById('inv-modal-prod-meta');
  const searchInput = document.getElementById('inv-tags-search-input');

  if (nameEl) nameEl.textContent = `${product.icon || '📦'} ${product.name}`;
  if (metaEl) metaEl.textContent = `SKU: ${product.sku} • Categoria: ${product.category} • Total em Estoque: ${product.quantity} unidades`;
  if (searchInput) searchInput.value = '';

  window.filterInvModalList();

  if (modal) modal.classList.add('active');
};

window.closeInvTagsModal = function() {
  const modal = document.getElementById('inv-tags-modal');
  if (modal) modal.classList.remove('active');
};

window.filterInvModalList = function() {
  if (!currentInvModalProductId) return;
  const product = getProductById(currentInvModalProductId);
  if (!product) return;

  const searchInput = document.getElementById('inv-tags-search-input');
  const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const grid = document.getElementById('inv-modal-tags-grid');
  if (!grid) return;

  const codes = product.inventoryCodes || [];
  const filtered = q ? codes.filter(c => c.toLowerCase().includes(q)) : codes;

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;">Nenhum número de inventário encontrado para "${q}".</div>`;
    return;
  }

  grid.innerHTML = filtered.map((code) => {
    const originalIndex = codes.indexOf(code) + 1;
    return `
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0.6rem; text-align: center; font-family: monospace;">
        <div style="font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase;">Unidade #${originalIndex}</div>
        <div style="font-size: 0.95rem; font-weight: 700; color: var(--primary); margin: 0.25rem 0;">${code}</div>
        <button class="btn btn-sm btn-secondary" onclick="navigator.clipboard.writeText('${code}'); window.showNotification ? window.showNotification('Código ${code} copiado!', 'success') : alert('Código ${code} copiado!');" style="font-size: 0.65rem; padding: 0.15rem 0.4rem; width: 100%;">
          📋 Copiar
        </button>
      </div>
    `;
  }).join('');
};

window.copyAllInvTagsToClipboard = function() {
  if (!currentInvModalProductId) return;
  const product = getProductById(currentInvModalProductId);
  if (!product || !product.inventoryCodes) return;

  const text = product.inventoryCodes.join(', ');
  navigator.clipboard.writeText(text);
  if (window.showToast) {
    window.showToast(`📋 Todos os ${product.inventoryCodes.length} códigos INV copiados!`, 'success');
  } else {
    alert(`Todos os ${product.inventoryCodes.length} códigos INV copiados!`);
  }
};

window.printInvTagsLabels = function() {
  if (!currentInvModalProductId) return;
  const product = getProductById(currentInvModalProductId);
  if (!product || !product.inventoryCodes || product.inventoryCodes.length === 0) {
    if (window.showToast) window.showToast('Nenhuma etiqueta disponível para impressão.', 'warning');
    return;
  }

  const sheet = document.getElementById('printable-inv-sheet');
  if (!sheet) return;

  const nowStr = new Date().toLocaleDateString('pt-BR');
  const logoUrl = './assets/logo.png';

  sheet.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 2px solid #000; padding-bottom: 8px;">
      <img src="${logoUrl}" alt="IA TECNOLOGIA" style="height: 38px; object-fit: contain;">
      <div style="text-align: right;">
        <div style="font-size: 11pt; font-weight: bold;">📦 StockMaster - Folha de Etiquetas de Patrimônio (INV)</div>
        <div style="font-size: 8.5pt; color: #333;">Produto: <strong>${product.name}</strong> (${product.sku}) • ${product.inventoryCodes.length} etiquetas • ${nowStr}</div>
      </div>
    </div>
    <div class="inv-label-grid">
      ${product.inventoryCodes.map((code, idx) => `
        <div class="inv-label-card">
          <div class="inv-label-header" style="display: flex; align-items: center; justify-content: space-between;">
            <img src="${logoUrl}" alt="IA TECNOLOGIA" style="height: 16px; object-fit: contain;">
            <span style="font-size: 6.5pt; font-weight: bold; color: #000;">PATRIMÔNIO</span>
          </div>
          <div class="inv-label-code">${code}</div>
          <div style="font-family: monospace; font-size: 8pt; letter-spacing: 2px; font-weight: bold; background: #000000; color: #ffffff; padding: 2px 0; margin: 3px 0;">
            ||||| |||| ||||| || ||| ||||
          </div>
          <div class="inv-label-meta"><strong>${product.name}</strong></div>
          <div class="inv-label-meta">SKU: ${product.sku} | Unid. #${idx + 1}</div>
        </div>
      `).join('')}
    </div>
  `;

  document.body.classList.add('printing-inv-labels');
  window.print();

  setTimeout(() => {
    document.body.classList.remove('printing-inv-labels');
  }, 1000);
};

/* --------------------------------------------------------------------------
   5. USER MANAGEMENT & PASSWORD CONTROL
   -------------------------------------------------------------------------- */
function renderUsersView() {
  const users = getUsers();
  const onlineSessions = getOnlineSessions();
  const onlineUsernames = new Set(onlineSessions.map(s => (s.username || '').toLowerCase()));
  
  const totalEl = document.getElementById('stat-total-users');
  const onlineEl = document.getElementById('stat-online-users');
  const adminEl = document.getElementById('stat-admin-users');
  const opEl = document.getElementById('stat-operator-users');
  const viewEl = document.getElementById('stat-viewer-users');

  if (totalEl) totalEl.textContent = users.length;
  if (onlineEl) onlineEl.textContent = onlineUsernames.size || (getCurrentUser() ? 1 : 0);
  if (adminEl) adminEl.textContent = users.filter(u => u.role === 'admin').length;
  if (opEl) opEl.textContent = users.filter(u => u.role === 'operator').length;
  if (viewEl) viewEl.textContent = users.filter(u => u.role === 'viewer').length;

  window.renderUsersTable();
}

window.renderUsersTable = function() {
  const users = getUsers();
  const onlineSessions = getOnlineSessions();
  const onlineUsernames = new Set(onlineSessions.map(s => (s.username || '').toLowerCase()));

  const searchInput = document.getElementById('users-search-input');
  const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const tbody = document.getElementById('users-tbody');
  if (!tbody) return;

  const filtered = q ? users.filter(u => u.name.toLowerCase().includes(q) || u.username.toLowerCase().includes(q)) : users;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem;">Nenhum usuário encontrado para "${q}".</td></tr>`;
    return;
  }

  const roleLabels = {
    admin: '<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 600;">🛡️ Administrador</span>',
    operator: '<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 600;">📦 Operador</span>',
    viewer: '<span class="badge" style="background: rgba(148, 163, 184, 0.15); color: #cbd5e1; border: 1px solid rgba(148, 163, 184, 0.3); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.75rem; font-weight: 600;">👁️ Modo Consulta</span>'
  };

  tbody.innerHTML = filtered.map(u => {
    const parts = (u.name || '').trim().split(' ');
    const initials = parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : (parts[0] || 'US').slice(0, 2).toUpperCase();
    const createdStr = u.createdAt ? new Date(u.createdAt).toLocaleDateString('pt-BR') : '-';
    const isOnline = onlineUsernames.has((u.username || '').toLowerCase());

    const onlineStatusHtml = isOnline
      ? '<span style="display: inline-flex; align-items: center; gap: 0.35rem; color: #34d399; font-size: 0.75rem; font-weight: 600; background: rgba(16, 185, 129, 0.15); padding: 0.18rem 0.5rem; border-radius: var(--radius-sm); border: 1px solid rgba(16, 185, 129, 0.3);"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#10b981;box-shadow:0 0 6px #10b981;"></span> 🟢 Online Agora</span>'
      : '<span style="color: var(--text-muted); font-size: 0.75rem;"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#64748b;margin-right:4px;"></span> Desconectado</span>';

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="position: relative;">
              <div class="avatar" style="width: 36px; height: 36px; font-size: 0.8rem; background: var(--bg-card); border: 1px solid var(--border);">${initials}</div>
              ${isOnline ? '<span style="position: absolute; bottom: -1px; right: -1px; width: 10px; height: 10px; border-radius: 50%; background: #10b981; border: 2px solid #0f172a; box-shadow: 0 0 5px #10b981;"></span>' : ''}
            </div>
            <div>
              <strong style="color: var(--text-main); font-size: 0.9rem;">${u.name}</strong>
              <div style="font-size: 0.75rem; color: var(--text-muted);">ID: ${u.id}</div>
            </div>
          </div>
        </td>
        <td><code>@${u.username}</code></td>
        <td>${roleLabels[u.role] || u.role}</td>
        <td>${onlineStatusHtml}</td>
        <td style="color: var(--text-muted); font-size: 0.85rem;">${createdStr}</td>
        <td style="text-align: right;">
          <div style="display: inline-flex; gap: 0.35rem;">
            <button class="btn btn-sm btn-secondary" onclick="window.openEditUserModal('${u.id}')" title="Editar Dados do Usuário">
              <i data-lucide="edit"></i>
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.openChangeUserPasswordModal('${u.id}')" title="Alterar / Cadastrar Nova Senha">
              <i data-lucide="key"></i>
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.deleteUser('${u.id}')" title="Excluir Usuário" ${u.username === 'admin' ? 'disabled style="opacity:0.3;cursor:not-allowed;"' : 'style="color:var(--danger);"'}>
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  setTimeout(initIcons, 50);
};

window.openAddUserModal = function() {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem cadastrar usuários.', 'danger');
    return;
  }
  state.editingUserId = null;
  const modal = document.getElementById('user-modal');
  const title = document.getElementById('user-modal-title');
  const form = document.getElementById('user-form');
  const editId = document.getElementById('user-edit-id');
  const pwdInput = document.getElementById('user-pwd');
  const pwdConfirm = document.getElementById('user-pwd-confirm');
  const pwdSection = document.getElementById('user-password-section');

  if (form) form.reset();
  if (editId) editId.value = '';
  if (title) title.innerHTML = '<i data-lucide="user-plus"></i> Novo Usuário';
  if (pwdInput) pwdInput.required = true;
  if (pwdConfirm) pwdConfirm.required = true;
  if (pwdSection) pwdSection.style.display = 'block';

  if (modal) modal.classList.add('active');
  setTimeout(initIcons, 50);
};

window.openEditUserModal = function(userId) {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem editar usuários.', 'danger');
    return;
  }
  const user = getUserById(userId);
  if (!user) return;

  state.editingUserId = userId;
  const modal = document.getElementById('user-modal');
  const title = document.getElementById('user-modal-title');
  const editId = document.getElementById('user-edit-id');

  if (editId) editId.value = user.id;
  if (title) title.innerHTML = `<i data-lucide="edit"></i> Editar Usuário: ${user.name}`;

  document.getElementById('user-fullname').value = user.name || '';
  document.getElementById('user-login').value = user.username || '';
  document.getElementById('user-role').value = user.role || 'operator';
  document.getElementById('user-status').value = user.status || 'active';

  // Disable changing username for master admin
  const loginInput = document.getElementById('user-login');
  if (loginInput) loginInput.disabled = (user.username === 'admin');

  // When editing, password fields are optional
  const pwdInput = document.getElementById('user-pwd');
  const pwdConfirm = document.getElementById('user-pwd-confirm');
  if (pwdInput) { pwdInput.value = ''; pwdInput.required = false; }
  if (pwdConfirm) { pwdConfirm.value = ''; pwdConfirm.required = false; }

  if (modal) modal.classList.add('active');
  setTimeout(initIcons, 50);
};

window.closeUserModal = function() {
  const modal = document.getElementById('user-modal');
  const loginInput = document.getElementById('user-login');
  if (loginInput) loginInput.disabled = false;
  if (modal) modal.classList.remove('active');
};

window.handleUserFormSubmit = function(e) {
  if (e) e.preventDefault();
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem cadastrar ou editar usuários.', 'danger');
    return;
  }

  const editId = document.getElementById('user-edit-id').value;
  const name = document.getElementById('user-fullname').value.trim();
  const username = document.getElementById('user-login').value.trim().toLowerCase();
  const role = document.getElementById('user-role').value;
  const status = document.getElementById('user-status').value;
  const pwd = document.getElementById('user-pwd').value;
  const pwdConfirm = document.getElementById('user-pwd-confirm').value;

  if (!name || !username) {
    showToast('Preencha o Nome e o Nome de Usuário.', 'warning');
    return;
  }

  const users = getUsers();

  // Check username uniqueness
  const existingUser = users.find(u => u.username.toLowerCase() === username && u.id !== editId);
  if (existingUser) {
    showToast(`O nome de usuário "@${username}" já está em uso. Escolha outro.`, 'danger');
    return;
  }

  if (!editId) {
    // New user: password required
    if (!pwd || pwd.length < 4) {
      showToast('A senha deve conter no mínimo 4 caracteres.', 'warning');
      return;
    }
    if (pwd !== pwdConfirm) {
      showToast('A confirmação de senha não confere.', 'danger');
      return;
    }

    const newUser = {
      id: 'usr_' + Date.now(),
      name,
      username,
      password: pwd,
      role,
      status,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);
    showToast(`Usuário "@${username}" cadastrado com sucesso!`, 'success');
  } else {
    // Edit existing user
    const idx = users.findIndex(u => u.id === editId);
    if (idx === -1) return;

    users[idx].name = name;
    if (users[idx].username !== 'admin') {
      users[idx].username = username;
    }
    users[idx].role = role;
    users[idx].status = status;

    if (pwd) {
      if (pwd.length < 4) {
        showToast('A senha deve conter no mínimo 4 caracteres.', 'warning');
        return;
      }
      if (pwd !== pwdConfirm) {
        showToast('A confirmação de senha não confere.', 'danger');
        return;
      }
      users[idx].password = pwd;
    }

    saveUsers(users);

    // If editing current logged user, update session
    const current = getCurrentUser();
    if (current && current.id === editId) {
      setCurrentUser(users[idx]);
    }

    showToast(`Usuário "${name}" atualizado com sucesso!`, 'success');
  }

  window.closeUserModal();
  renderUsersView();
};

window.openChangeUserPasswordModal = function(userId) {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem redefinir senhas de terceiros.', 'danger');
    return;
  }
  const user = getUserById(userId);
  if (!user) return;

  const modal = document.getElementById('change-pwd-modal');
  const inputId = document.getElementById('change-pwd-user-id');
  const subtitle = document.getElementById('change-pwd-subtitle');
  const form = document.getElementById('change-pwd-form');

  if (form) form.reset();
  if (inputId) inputId.value = user.id;
  if (subtitle) subtitle.textContent = `Defina uma nova senha para @${user.username} (${user.name})`;

  if (modal) modal.classList.add('active');
  setTimeout(initIcons, 50);
};

window.closeChangePwdModal = function() {
  const modal = document.getElementById('change-pwd-modal');
  if (modal) modal.classList.remove('active');
};

window.handleChangePwdSubmit = function(e) {
  if (e) e.preventDefault();
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem alterar senhas de outros usuários.', 'danger');
    return;
  }
  const userId = document.getElementById('change-pwd-user-id').value;
  const newPwd = document.getElementById('new-user-pwd').value;
  const newPwdConfirm = document.getElementById('new-user-pwd-confirm').value;

  if (!newPwd || newPwd.length < 4) {
    showToast('A nova senha deve ter no mínimo 4 caracteres.', 'warning');
    return;
  }

  if (newPwd !== newPwdConfirm) {
    showToast('A confirmação de senha não confere!', 'danger');
    return;
  }

  const users = getUsers();
  const idx = users.findIndex(u => u.id === userId);
  if (idx === -1) return;

  users[idx].password = newPwd;
  saveUsers(users);

  showToast(`🔑 Senha do usuário @${users[idx].username} alterada com sucesso!`, 'success');
  window.closeChangePwdModal();
};

window.deleteUser = function(userId) {
  if (!isAdmin()) {
    showToast('🔒 Permissão negada: Somente administradores podem excluir usuários.', 'danger');
    return;
  }
  const user = getUserById(userId);
  if (!user) return;

  if (user.username === 'admin') {
    showToast('O usuário Administrador principal não pode ser excluído!', 'warning');
    return;
  }

  const current = getCurrentUser();
  if (current && current.id === userId) {
    showToast('Você não pode excluir o seu próprio usuário logado!', 'warning');
    return;
  }

  if (!confirm(`Deseja realmente excluir a conta do usuário "${user.name}" (@${user.username})?`)) {
    return;
  }

  const users = getUsers().filter(u => u.id !== userId);
  saveUsers(users);
  showToast(`Usuário "@${user.username}" excluído com sucesso.`, 'info');
  renderUsersView();
};

/* Self Profile Modal */
window.openSelfProfileModal = function() {
  const user = getCurrentUser();
  if (!user) return;

  const fullUser = getUserById(user.id) || user;
  const modal = document.getElementById('self-profile-modal');
  const nameEl = document.getElementById('self-modal-name');
  const metaEl = document.getElementById('self-modal-meta');
  const avatarEl = document.getElementById('self-modal-avatar');
  const form = document.getElementById('self-profile-form');

  if (form) form.reset();
  if (nameEl) nameEl.textContent = fullUser.name;
  if (metaEl) metaEl.textContent = `@${fullUser.username} • Perfil: ${fullUser.role === 'admin' ? 'Administrador' : fullUser.role}`;
  if (avatarEl) {
    const parts = (fullUser.name || '').trim().split(' ');
    const initials = parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase() : (parts[0] || 'AD').slice(0, 2).toUpperCase();
    avatarEl.textContent = initials;
  }

  if (modal) modal.classList.add('active');
  setTimeout(initIcons, 50);
};

window.closeSelfProfileModal = function() {
  const modal = document.getElementById('self-profile-modal');
  if (modal) modal.classList.remove('active');
};

window.handleSelfProfileSubmit = function(e) {
  if (e) e.preventDefault();
  const current = getCurrentUser();
  if (!current) return;

  const currentPwd = document.getElementById('self-current-pwd').value;
  const newPwd = document.getElementById('self-new-pwd').value;
  const newPwdConfirm = document.getElementById('self-new-pwd-confirm').value;

  const users = getUsers();
  const idx = users.findIndex(u => u.id === current.id);
  if (idx === -1) return;

  if (users[idx].password !== currentPwd && currentPwd !== AUTH_CONFIG.MASTER_PASSWORD) {
    showToast('A senha atual informada está incorreta.', 'danger');
    return;
  }

  if (!newPwd || newPwd.length < 4) {
    showToast('A nova senha deve ter pelo menos 4 caracteres.', 'warning');
    return;
  }

  if (newPwd !== newPwdConfirm) {
    showToast('A confirmação da nova senha não confere.', 'danger');
    return;
  }

  users[idx].password = newPwd;
  saveUsers(users);
  showToast('🔑 Sua senha foi alterada com sucesso!', 'success');
  window.closeSelfProfileModal();
};
