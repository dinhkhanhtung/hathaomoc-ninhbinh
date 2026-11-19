import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SiteSettings,
  FlowerCategory,
  FlowerProduct,
  BlogPost,
  CustomerOrder,
  THAM_TRAN_SETTINGS,
  ORIGINAL_DEMO_SETTINGS,
  INITIAL_CATEGORIES,
  INITIAL_PRODUCTS,
  INITIAL_POSTS,
  INITIAL_ORDERS,
} from '../data/initialData';

export interface CartItem {
  product: FlowerProduct;
  quantity: number;
  includeFreeCard: boolean;
  cardNote: string;
}

interface CMSContextType {
  settings: SiteSettings;
  categories: FlowerCategory[];
  products: FlowerProduct[];
  posts: BlogPost[];
  orders: CustomerOrder[];
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  updateSettings: (next: Partial<SiteSettings>) => void;
  applyPreset: (preset: 'tham_tran' | 'original_demo') => void;
  saveProduct: (item: Omit<FlowerProduct, 'id' | 'createdAt'> & { id?: string }) => FlowerProduct;
  deleteProduct: (id: string) => void;
  savePost: (item: Omit<BlogPost, 'id' | 'views'> & { id?: string; views?: number }) => BlogPost;
  deletePost: (id: string) => void;
  saveCategory: (item: Omit<FlowerCategory, 'id'> & { id?: string }) => void;
  deleteCategory: (id: string) => void;
  addOrder: (item: Omit<CustomerOrder, 'id' | 'status' | 'createdAt'>) => void;
  updateOrderStatus: (id: string, status: CustomerOrder['status']) => void;
  deleteOrder: (id: string) => void;
  addToCart: (product: FlowerProduct, quantity?: number, includeFreeCard?: boolean, cardNote?: string) => void;
  removeFromCart: (productId: string) => void;
  updateCartQty: (productId: string, quantity: number) => void;
  clearCart: () => void;
  resetAllToDefault: () => void;
  exportFullJson: () => string;
  importFullJson: (jsonStr: string) => boolean;
}

const STORAGE_KEYS = {
  SETTINGS: 'hathaomoc_nb_settings_v3',
  CATEGORIES: 'hathaomoc_nb_categories_v3',
  PRODUCTS: 'hathaomoc_nb_products_v3',
  POSTS: 'hathaomoc_nb_posts_v3',
  ORDERS: 'hathaomoc_nb_orders_v3',
  CART: 'hathaomoc_nb_cart_v3',
};

const CMSContext = createContext<CMSContextType | null>(null);

function loadStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(() =>
    loadStorage(STORAGE_KEYS.SETTINGS, THAM_TRAN_SETTINGS)
  );
  const [categories, setCategories] = useState<FlowerCategory[]>(() =>
    loadStorage(STORAGE_KEYS.CATEGORIES, INITIAL_CATEGORIES)
  );
  const [products, setProducts] = useState<FlowerProduct[]>(() =>
    loadStorage(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS)
  );
  const [posts, setPosts] = useState<BlogPost[]>(() =>
    loadStorage(STORAGE_KEYS.POSTS, INITIAL_POSTS)
  );
  const [orders, setOrders] = useState<CustomerOrder[]>(() =>
    loadStorage(STORAGE_KEYS.ORDERS, INITIAL_ORDERS)
  );
  const [cart, setCart] = useState<CartItem[]>(() =>
    loadStorage(STORAGE_KEYS.CART, [])
  );
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    document.title = `${settings.brandName} – ${settings.brandSub}`;
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  const updateSettings = (next: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...next }));
  };

  const applyPreset = (preset: 'tham_tran' | 'original_demo') => {
    if (preset === 'tham_tran') {
      setSettings(THAM_TRAN_SETTINGS);
    } else {
      setSettings(ORIGINAL_DEMO_SETTINGS);
    }
  };

  const saveProduct = (
    item: Omit<FlowerProduct, 'id' | 'createdAt'> & { id?: string }
  ): FlowerProduct => {
    if (item.id) {
      let updated!: FlowerProduct;
      setProducts((prev) =>
        prev.map((p) => {
          if (p.id === item.id) {
            updated = { ...p, ...item, id: p.id };
            return updated;
          }
          return p;
        })
      );
      return updated;
    } else {
      const created: FlowerProduct = {
        ...item,
        id: `prod-${Date.now()}`,
        createdAt: new Date().toISOString(),
      };
      setProducts((prev) => [created, ...prev]);
      return created;
    }
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const savePost = (
    item: Omit<BlogPost, 'id' | 'views'> & { id?: string; views?: number }
  ): BlogPost => {
    if (item.id) {
      let updated!: BlogPost;
      setPosts((prev) =>
        prev.map((p) => {
          if (p.id === item.id) {
            updated = { ...p, ...item, id: p.id, views: item.views ?? p.views };
            return updated;
          }
          return p;
        })
      );
      return updated;
    } else {
      const created: BlogPost = {
        ...item,
        id: `post-${Date.now()}`,
        views: item.views ?? 1,
      };
      setPosts((prev) => [created, ...prev]);
      return created;
    }
  };

  const deletePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const saveCategory = (item: Omit<FlowerCategory, 'id'> & { id?: string }) => {
    if (item.id) {
      setCategories((prev) =>
        prev.map((c) => (c.id === item.id ? { ...c, ...item, id: c.id } : c))
      );
    } else {
      setCategories((prev) => [
        ...prev,
        { ...item, id: `cat-${Date.now()}` },
      ]);
    }
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const addOrder = (item: Omit<CustomerOrder, 'id' | 'status' | 'createdAt'>) => {
    const newOrder: CustomerOrder = {
      ...item,
      id: `ord-${Date.now()}`,
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  const updateOrderStatus = (id: string, status: CustomerOrder['status']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );
  };

  const deleteOrder = (id: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const addToCart = (
    product: FlowerProduct,
    quantity = 1,
    includeFreeCard = false,
    cardNote = ''
  ) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = {
          ...copy[idx],
          quantity: copy[idx].quantity + quantity,
          includeFreeCard: includeFreeCard || copy[idx].includeFreeCard,
          cardNote: cardNote || copy[idx].cardNote,
        };
        return copy;
      }
      return [...prev, { product, quantity, includeFreeCard, cardNote }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateCartQty = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => setCart([]);

  const resetAllToDefault = () => {
    setSettings(THAM_TRAN_SETTINGS);
    setCategories(INITIAL_CATEGORIES);
    setProducts(INITIAL_PRODUCTS);
    setPosts(INITIAL_POSTS);
    setOrders(INITIAL_ORDERS);
    setCart([]);
  };

  const exportFullJson = () => {
    return JSON.stringify(
      { settings, categories, products, posts, orders },
      null,
      2
    );
  };

  const importFullJson = (jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.settings) setSettings(parsed.settings);
      if (Array.isArray(parsed.categories)) setCategories(parsed.categories);
      if (Array.isArray(parsed.products)) setProducts(parsed.products);
      if (Array.isArray(parsed.posts)) setPosts(parsed.posts);
      if (Array.isArray(parsed.orders)) setOrders(parsed.orders);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <CMSContext.Provider
      value={{
        settings,
        categories,
        products,
        posts,
        orders,
        cart,
        cartOpen,
        setCartOpen,
        updateSettings,
        applyPreset,
        saveProduct,
        deleteProduct,
        savePost,
        deletePost,
        saveCategory,
        deleteCategory,
        addOrder,
        updateOrderStatus,
        deleteOrder,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        resetAllToDefault,
        exportFullJson,
        importFullJson,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error('useCMS must be used within CMSProvider');
  return ctx;
};
