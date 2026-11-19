import React, { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  LayoutDashboard,
  Leaf,
  FileText,
  FolderOpen,
  MessageSquare,
  Settings,
  Home,
  LogOut,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Save,
  ArrowLeft,
  Upload,
  CheckCircle2,
  Eye,
  Search,
  Menu,
  X,
  RefreshCw,
  Download,
  Sparkles,
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { FlowerProduct, BlogPost } from '../data/initialData';

function toSlug(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function compressImageFile(file: File, maxWidth = 900): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const scale = img.width > maxWidth ? maxWidth / img.width : 1;
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('Canvas error'));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.84));
      };
      img.onerror = reject;
      img.src = ev.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ==========================================================================
   1. ADMIN DASHBOARD (/admin)
   ========================================================================== */
const AdminDashboardPage: React.FC = () => {
  const { products, posts, orders, categories, settings } = useCMS();
  const newOrders = orders.filter((o) => o.status === 'new').length;
  const publishedProducts = products.filter((p) => p.status === 'published').length;
  const publishedPosts = posts.filter((p) => p.status === 'published').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 m-0">
            Tổng quan Quản trị – {settings.brandName}
          </h1>
          <p className="text-sm text-slate-500 mt-1 mb-0">
            Quản lý sản phẩm thảo dược, đăng bài viết chuẩn SEO và cập nhật thông tin cửa hàng theo thời gian thực.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <Link
            to="/admin/products/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-semibold text-sm no-underline shadow-sm"
          >
            <Plus size={16} />
            Thêm sản phẩm mới
          </Link>
          <Link
            to="/admin/posts/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#16302a] hover:bg-[#0f221e] text-white font-semibold text-sm no-underline shadow-sm"
          >
            <Plus size={16} />
            Viết bài mới
          </Link>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Tổng sản phẩm
            </span>
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2e7d32] flex items-center justify-center">
              <Leaf size={20} />
            </span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-3">
            {products.length}
          </div>
          <div className="text-xs text-emerald-600 font-medium mt-1">
            {publishedProducts} sản phẩm đang hiển thị
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Bài viết / Tin tức
            </span>
            <span className="w-10 h-10 rounded-xl bg-indigo-50 text-[#28337e] flex items-center justify-center">
              <FileText size={20} />
            </span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-3">
            {posts.length}
          </div>
          <div className="text-xs text-indigo-600 font-medium mt-1">
            {publishedPosts} bài đã xuất bản
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Đơn đặt & Tư vấn
            </span>
            <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MessageSquare size={20} />
            </span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-3">
            {orders.length}
          </div>
          <div className="text-xs text-amber-600 font-medium mt-1">
            {newOrders} yêu cầu mới chờ xử lý
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Danh mục thảo dược
            </span>
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FolderOpen size={20} />
            </span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mt-3">
            {categories.length}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Đồ ngâm rượu, Tam thất bắc, Trái nhàu, Thảo dược
          </div>
        </div>
      </div>

      {/* Recent Posts & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900 m-0">
              Bài viết mới nhất
            </h3>
            <Link
              to="/admin/posts"
              className="text-xs font-semibold text-[#28337e] hover:underline no-underline"
            >
              Xem tất cả →
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {posts.slice(0, 5).map((p) => (
              <div
                key={p.id}
                className="py-3 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-lg object-cover flex-shrink-0 border border-slate-200"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-800 truncate">
                      {p.title}
                    </div>
                    <div className="text-xs text-slate-400">
                      {p.date} · {p.category}
                    </div>
                  </div>
                </div>
                <Link
                  to={`/admin/posts/edit/${p.id}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 no-underline flex-shrink-0"
                >
                  Sửa
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900 m-0">
              Đơn đặt hàng & Yêu cầu tư vấn gần đây
            </h3>
            <Link
              to="/admin/orders"
              className="text-xs font-semibold text-[#2e7d32] hover:underline no-underline"
            >
              Quản lý đơn →
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {orders.slice(0, 5).map((o) => (
              <div key={o.id} className="py-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-800">
                    {o.customerName} –{' '}
                    <a
                      href={`tel:${o.phone}`}
                      className="text-[#2e7d32] no-underline"
                    >
                      {o.phone}
                    </a>
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      o.status === 'new'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {o.status === 'new' ? 'Mới' : 'Đã xử lý'}
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                  [{o.occasion}] {o.message}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   2. QUẢN LÝ BÀI VIẾT (/admin/posts & /admin/posts/new & /admin/posts/edit/:id)
   (Kế thừa chuẩn AdminPosts + AdminPostEditor từ Khoancocnhoi1)
   ========================================================================== */
const AdminPostsPage: React.FC = () => {
  const { posts, deletePost } = useCMS();
  const [search, setSearch] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<BlogPost | null>(null);

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
      {/* Custom Delete Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Xác nhận xóa bài viết
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Bạn có chắc chắn muốn xóa bài viết{' '}
              <strong>"{deleteTarget.title}"</strong>?
            </p>
            <div className="flex justify-end gap-2.5">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold border-0 cursor-pointer"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  deletePost(deleteTarget.id);
                  setDeleteTarget(null);
                }}
                className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold border-0 cursor-pointer"
              >
                Xóa bài viết
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 m-0">
            Quản lý Bài viết ({filtered.length})
          </h2>
          <p className="text-xs text-slate-500 mt-1 mb-0">
            Đăng bài chia sẻ kinh nghiệm ngâm rượu, phân biệt dược liệu chuẩn và chăm sóc sức khỏe.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm tiêu đề bài viết..."
              className="h-10 pl-9 pr-4 rounded-xl border border-slate-200 text-sm outline-none"
            />
            <Search
              size={15}
              className="absolute left-3 top-3 text-slate-400"
            />
          </div>
          <Link
            to="/admin/posts/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#28337e] hover:bg-[#1e2660] text-white font-semibold text-sm no-underline"
          >
            <Plus size={16} />
            Thêm bài viết mới
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-bold uppercase text-slate-400">
              <th className="py-3 px-3">Bài viết</th>
              <th className="py-3 px-3">Chuyên mục</th>
              <th className="py-3 px-3">Ngày đăng</th>
              <th className="py-3 px-3">Trạng thái</th>
              <th className="py-3 px-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filtered.map((post) => (
              <tr key={post.id} className="hover:bg-slate-50/80">
                <td className="py-3.5 px-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-14 h-11 rounded-lg object-cover flex-shrink-0 border border-slate-200"
                    />
                    <div>
                      <div className="font-bold text-slate-900 line-clamp-1">
                        {post.title}
                      </div>
                      <div className="text-xs text-slate-400">
                        /tin-tuc/{post.slug}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-3">
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                    {post.category}
                  </span>
                </td>
                <td className="py-3.5 px-3 text-slate-500">{post.date}</td>
                <td className="py-3.5 px-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      post.status === 'published'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    {post.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
                  </span>
                </td>
                <td className="py-3.5 px-3 text-right whitespace-nowrap">
                  <div className="inline-flex items-center gap-1.5">
                    <Link
                      to={`/tin-tuc/${post.slug}`}
                      target="_blank"
                      className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                      title="Xem bài viết"
                    >
                      <ExternalLink size={16} />
                    </Link>
                    <Link
                      to={`/admin/posts/edit/${post.id}`}
                      className="p-2 rounded-lg text-indigo-600 hover:bg-indigo-50"
                      title="Chỉnh sửa"
                    >
                      <Edit size={16} />
                    </Link>
                    <button
                      onClick={() => setDeleteTarget(post)}
                      className="p-2 rounded-lg text-red-600 hover:bg-red-50 bg-transparent border-0 cursor-pointer"
                      title="Xóa"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AdminPostEditorPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { posts, savePost } = useCMS();
  const existing = id ? posts.find((p) => p.id === id) : undefined;

  const [title, setTitle] = useState(existing?.title || '');
  const [slug, setSlug] = useState(existing?.slug || '');
  const [category, setCategory] = useState(
    existing?.category || 'Cẩm nang ngâm rượu'
  );
  const [date, setDate] = useState(
    existing?.date || new Date().toISOString().slice(0, 10)
  );
  const [status, setStatus] = useState<'published' | 'draft'>(
    existing?.status || 'published'
  );
  const [image, setImage] = useState(
    existing?.image || '/images/products/ba-kich-tim.jpg'
  );
  const [excerpt, setExcerpt] = useState(existing?.excerpt || '');
  const [content, setContent] = useState(
    existing?.content ||
      '<h2>1. Giới thiệu thảo dược</h2>\n<p>Nhập nội dung chi tiết bài viết tại đây...</p>'
  );
  const [previewMode, setPreviewMode] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!existing) {
      setSlug(toSlug(val));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await compressImageFile(file, 900);
    setImage(dataUrl);
  };

  const insertTag = (openTag: string, closeTag: string) => {
    setContent((prev) => `${prev}\n${openTag}Nội dung...${closeTag}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    savePost({
      id: existing?.id,
      title: title.trim(),
      slug: slug.trim() || toSlug(title),
      category: category.trim(),
      date,
      status,
      image,
      excerpt: excerpt.trim(),
      content,
    });
    setSavedToast(true);
    setTimeout(() => {
      setSavedToast(false);
      navigate('/admin/posts');
    }, 900);
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/posts"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 no-underline"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h2 className="text-xl font-bold text-slate-900 m-0">
              {existing ? 'Chỉnh sửa bài viết' : 'Đăng bài viết mới'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5 mb-0">
              Soạn thảo nội dung chuẩn SEO và xem trước trực tiếp
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setPreviewMode(!previewMode)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold cursor-pointer"
          >
            <Eye size={15} />
            {previewMode ? 'Quay lại sửa' : 'Xem trước'}
          </button>
        </div>
      </div>

      {savedToast && (
        <div className="mb-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
          <CheckCircle2 size={18} className="text-emerald-600" />
          Đã lưu bài viết thành công! Đang chuyển về danh sách...
        </div>
      )}

      {previewMode ? (
        <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-[#2e7d32] text-xs font-bold">
            {category}
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900">{title}</h1>
          <img
            src={image}
            alt={title}
            className="w-full max-h-[380px] object-cover rounded-xl"
          />
          <p className="italic text-slate-600">{excerpt}</p>
          <div
            className="prose max-w-none text-slate-800"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-8 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                  Tiêu đề bài viết *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Nhập tiêu đề bài viết..."
                  className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm font-semibold outline-none focus:border-[#28337e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                  Đường dẫn tĩnh (Slug)
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full h-10 px-3.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                  Mô tả ngắn (Excerpt)
                </label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Đoạn tóm tắt ngắn hiển thị ở danh sách bài viết..."
                  className="w-full p-3.5 rounded-xl border border-slate-200 text-sm outline-none resize-none"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <label className="text-xs font-bold uppercase text-slate-500">
                    Nội dung bài viết (HTML / Rich Text)
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => insertTag('<h2>', '</h2>')}
                      className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold border-0 cursor-pointer"
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      onClick={() => insertTag('<h3>', '</h3>')}
                      className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold border-0 cursor-pointer"
                    >
                      H3
                    </button>
                    <button
                      type="button"
                      onClick={() => insertTag('<strong>', '</strong>')}
                      className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold border-0 cursor-pointer"
                    >
                      In đậm
                    </button>
                    <button
                      type="button"
                      onClick={() => insertTag('<p>', '</p>')}
                      className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold border-0 cursor-pointer"
                    >
                      Đoạn văn
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        insertTag('<ul>\n  <li>', '</li>\n</ul>')
                      }
                      className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold border-0 cursor-pointer"
                    >
                      Danh sách
                    </button>
                  </div>
                </div>
                <textarea
                  rows={12}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-4 rounded-xl border border-slate-200 font-mono text-sm outline-none focus:border-[#28337e]"
                />
              </div>
            </div>

            {/* Right Sidebar Metadata */}
            <div className="md:col-span-4 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Trạng thái
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm font-semibold outline-none"
                  >
                    <option value="published">Xuất bản công khai</option>
                    <option value="draft">Lưu bản nháp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Chuyên mục
                  </label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Ngày đăng
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm outline-none"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <label className="block text-xs font-bold uppercase text-slate-500">
                  Ảnh đại diện bài viết
                </label>
                {image && (
                  <img
                    src={image}
                    alt="Thumbnail"
                    referrerPolicy="no-referrer"
                    className="w-full h-40 object-cover rounded-xl border border-slate-200"
                  />
                )}
                <label className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold text-slate-700 cursor-pointer">
                  <Upload size={15} />
                  Tải ảnh từ máy tính (Tự nén)
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Hoặc dán URL ảnh..."
                  className="w-full h-9 px-3 rounded-xl border border-slate-200 bg-white text-xs outline-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#28337e] hover:bg-[#1e2660] text-white font-bold text-sm border-0 cursor-pointer shadow-sm"
              >
                <Save size={17} />
                {existing ? 'Cập nhật bài viết' : 'Đăng bài viết ngay'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

/* ==========================================================================
   3. QUẢN LÝ MẪU HOA / SẢN PHẨM (/admin/products & /admin/products/new & edit)
   ========================================================================== */
const AdminProductsPage: React.FC = () => {
  const { products, categories, deleteProduct } = useCMS();
  const [filterCat, setFilterCat] = useState('');
  const [search, setSearch] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<FlowerProduct | null>(null);

  const filtered = products.filter((p) => {
    const matchCat = !filterCat || p.categorySlug === filterCat;
    const matchQ =
      !search.trim() ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.code.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Xác nhận xóa sản phẩm
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Bạn có chắc muốn xóa sản phẩm <strong>{deleteTarget.title}</strong>?
            </p>
            <div className="flex justify-end gap-2.5">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold border-0 cursor-pointer"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  deleteProduct(deleteTarget.id);
                  setDeleteTarget(null);
                }}
                className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold border-0 cursor-pointer"
              >
                Xóa sản phẩm
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 m-0">
            Quản lý Sản phẩm thảo dược ({filtered.length})
          </h2>
          <p className="text-xs text-slate-500 mt-1 mb-0">
            Thêm sản phẩm mới, chỉnh sửa giá bán và hình ảnh thực tế từng mặt hàng.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
            className="h-10 px-3 rounded-xl border border-slate-200 text-sm bg-white outline-none"
          >
            <option value="">Tất cả danh mục</option>
            {categories.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm mã SP (VD: BK01)..."
            className="h-10 px-3.5 rounded-xl border border-slate-200 text-sm outline-none"
          />

          <Link
            to="/admin/products/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-semibold text-sm no-underline"
          >
            <Plus size={16} />
            Thêm sản phẩm
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="border border-slate-200 rounded-xl overflow-hidden flex flex-col bg-white hover:shadow-md transition-shadow"
          >
            <div className="relative pt-[125%] bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/65 text-white text-[10px] font-bold">
                {item.code}
              </span>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-400">{item.categoryName}</div>
                <div className="text-sm font-bold text-slate-800 truncate">
                  {item.title}
                </div>
                <div className="text-sm font-extrabold text-[#2e7d32] mt-0.5">
                  {item.priceText}
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-slate-100">
                <Link
                  to={`/admin/products/edit/${item.id}`}
                  className="flex-1 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold text-center no-underline"
                >
                  Sửa
                </Link>
                <button
                  onClick={() => setDeleteTarget(item)}
                  className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 bg-transparent border-0 cursor-pointer"
                  title="Xóa"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdminProductEditorPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { products, categories, saveProduct } = useCMS();
  const existing = id ? products.find((p) => p.id === id) : undefined;

  const [code, setCode] = useState(existing?.code || 'HT01');
  const [title, setTitle] = useState(existing?.title || 'Thảo Dược Rừng – HT01');
  const [categorySlug, setCategorySlug] = useState(
    existing?.categorySlug || 'do-ngam-ruou'
  );
  const [priceNumber, setPriceNumber] = useState(
    existing?.priceNumber || 350000
  );
  const [image, setImage] = useState(
    existing?.image || '/images/products/tam-that-bac-52.jpg'
  );
  const [description, setDescription] = useState(
    existing?.description ||
      'Thảo dược tự nhiên đất rừng Nho Quan - Cúc Phương, sơ chế sạch, gửi ảnh thực tế duyệt trước khi đóng thùng.'
  );
  const [status, setStatus] = useState<'published' | 'draft'>(
    existing?.status || 'published'
  );

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await compressImageFile(file, 800);
    setImage(dataUrl);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const catObj =
      categories.find((c) => c.slug === categorySlug) || categories[0];
    const formattedPrice = `${Number(priceNumber).toLocaleString('vi-VN')} ₫`;
    saveProduct({
      id: existing?.id,
      code: code.trim().toUpperCase(),
      title: title.trim(),
      slug: existing?.slug || toSlug(title),
      categorySlug: catObj.slug,
      categoryName: catObj.name,
      priceNumber: Number(priceNumber),
      priceText: formattedPrice,
      image,
      fullImage: image,
      description,
      status,
      featured: true,
    });
    navigate('/admin/products');
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs max-w-3xl">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <Link
          to="/admin/products"
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 no-underline"
        >
          <ArrowLeft size={18} />
        </Link>
        <h2 className="text-xl font-bold text-slate-900 m-0">
          {existing ? `Sửa sản phẩm: ${existing.title}` : 'Thêm sản phẩm thảo dược mới'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Mã sản phẩm *
            </label>
            <input
              type="text"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Tên sản phẩm hiển thị *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Danh mục thảo dược
            </label>
            <select
              value={categorySlug}
              onChange={(e) => setCategorySlug(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold outline-none"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Giá bán (VNĐ) *
            </label>
            <input
              type="number"
              required
              step={10000}
              value={priceNumber}
              onChange={(e) => setPriceNumber(Number(e.target.value))}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm font-bold text-[#2e7d32] outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
            Hình ảnh sản phẩm
          </label>
          <div className="flex flex-wrap items-start gap-4">
            <img
              src={image}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-28 h-36 object-cover rounded-xl border border-slate-200"
            />
            <div className="flex-1 space-y-2.5 min-w-[220px]">
              <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 cursor-pointer">
                <Upload size={15} />
                Chọn ảnh từ máy tính (Tự động nén)
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Hoặc dán link ảnh trực tiếp..."
                className="w-full h-10 px-3.5 rounded-xl border border-slate-200 text-xs outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
            Mô tả chi tiết
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3.5 rounded-xl border border-slate-200 text-sm outline-none"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold text-sm border-0 cursor-pointer"
        >
          <Save size={17} />
          Lưu sản phẩm
        </button>
      </form>
    </div>
  );
};

/* ==========================================================================
   4. QUẢN LÝ ĐƠN ĐẶT HÀNG & LIÊN HỆ (/admin/orders)
   ========================================================================== */
const AdminOrdersPage: React.FC = () => {
  const { orders, updateOrderStatus, deleteOrder } = useCMS();

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
      <h2 className="text-xl font-bold text-slate-900 mb-1">
        Đơn đặt hàng & Khách hàng liên hệ ({orders.length})
      </h2>
      <p className="text-xs text-slate-500 mb-6">
        Danh sách khách đặt thảo dược từ giỏ hàng và gửi form tư vấn trên website.
      </p>

      <div className="space-y-3">
        {orders.map((o) => (
          <div
            key={o.id}
            className="p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="font-bold text-slate-900">
                  {o.customerName}
                </span>
                <a
                  href={`tel:${o.phone}`}
                  className="font-bold text-sm text-[#2e7d32] no-underline"
                >
                  {o.phone}
                </a>
                <span className="text-xs text-slate-400">
                  · {new Date(o.createdAt).toLocaleString('vi-VN')}
                </span>
              </div>
              <div className="text-sm text-slate-700">
                <strong>[{o.occasion}]</strong> {o.message}
              </div>
              {o.totalPrice && (
                <div className="text-xs font-bold text-[#2e7d32]">
                  Tổng cộng: {o.totalPrice}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <select
                value={o.status}
                onChange={(e) =>
                  updateOrderStatus(o.id, e.target.value as any)
                }
                className="h-9 px-3 rounded-lg border border-slate-200 text-xs font-bold bg-white"
              >
                <option value="new">Mới tiếp nhận</option>
                <option value="processing">Đang đóng gói & giao</option>
                <option value="completed">Đã hoàn tất</option>
              </select>
              <button
                onClick={() => deleteOrder(o.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg bg-transparent border-0 cursor-pointer"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   5. CÀI ĐẶT WEBSITE (/admin/settings) — Giống AdminSettings Khoancocnhoi1
   ========================================================================== */
const AdminSettingsPage: React.FC = () => {
  const {
    settings,
    updateSettings,
    applyPreset,
    resetAllToDefault,
    exportFullJson,
  } = useCMS();
  const [form, setForm] = useState(settings);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handlePreset = (preset: 'tham_tran' | 'original_demo') => {
    applyPreset(preset);
    setTimeout(() => {
      window.location.reload();
    }, 150);
  };

  const handleExport = () => {
    const blob = new Blob([exportFullJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hathaomoc-cms-backup.json';
    a.click();
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs max-w-4xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900 m-0">
            Cài đặt Thương hiệu & Thông tin Website
          </h2>
          <p className="text-xs text-slate-500 mt-1 mb-0">
            Đổi tên cơ sở, số điện thoại Hotline, Zalo, địa chỉ và tiêu đề trang chủ chỉ trong 1 cú nhấp.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handlePreset('tham_tran')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#2e7d32] text-xs font-bold border border-emerald-200 cursor-pointer"
          >
            <Sparkles size={14} />
            Khôi phục cấu hình Hà Thảo Mộc
          </button>
        </div>
      </div>

      {saved && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
          <CheckCircle2 size={18} className="text-emerald-600" />
          Đã lưu cấu hình Website thành công!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Tên thương hiệu / Cơ sở thảo dược
            </label>
            <input
              type="text"
              value={form.brandName}
              onChange={(e) => setForm({ ...form, brandName: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Dòng mô tả dưới Logo
            </label>
            <input
              type="text"
              value={form.brandSub}
              onChange={(e) => setForm({ ...form, brandSub: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Số Hotline hiển thị
            </label>
            <input
              type="text"
              value={form.hotline}
              onChange={(e) =>
                setForm({
                  ...form,
                  hotline: e.target.value,
                  hotlineRaw: e.target.value.replace(/\s+/g, ''),
                })
              }
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm font-bold text-[#2e7d32] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Số Zalo (Không khoảng trắng)
            </label>
            <input
              type="text"
              value={form.zaloPhone}
              onChange={(e) => setForm({ ...form, zaloPhone: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm font-bold text-[#0068ff] outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Địa chỉ cửa hàng
            </label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Giờ mở cửa
            </label>
            <input
              type="text"
              value={form.openHours}
              onChange={(e) => setForm({ ...form, openHours: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Kiểu hiển thị Logo
            </label>
            <select
              value={form.logoMode}
              onChange={(e) =>
                setForm({ ...form, logoMode: e.target.value as any })
              }
              className="w-full h-11 px-3.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold outline-none"
            >
              <option value="custom_brand">
                Biểu tượng Lá + Tên thương hiệu ({form.brandName})
              </option>
              <option value="original_img">
                Ảnh Logo tải lên từ URL
              </option>
            </select>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold text-sm border-0 cursor-pointer"
          >
            <Save size={17} />
            Lưu cấu hình Website
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border-0 cursor-pointer"
            >
              <Download size={14} />
              Xuất file JSON Backup
            </button>
            <button
              type="button"
              onClick={resetAllToDefault}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border-0 cursor-pointer"
            >
              <RefreshCw size={14} />
              Khôi phục mặc định
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

/* ==========================================================================
   6. ADMIN SHELL LAYOUT
   ========================================================================== */
export const AdminPanel: React.FC = () => {
  const { settings, products, applyPreset } = useCMS();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/products', icon: Leaf, label: `Sản phẩm (${products.length})` },
    { to: '/admin/posts', icon: FileText, label: 'Bài viết / Tin tức' },
    { to: '/admin/orders', icon: MessageSquare, label: 'Đơn đặt & Liên hệ' },
    { to: '/admin/settings', icon: Settings, label: 'Cài đặt Website' },
  ];

  const isActive = (to: string) =>
    to === '/admin'
      ? location.pathname === '/admin'
      : location.pathname.startsWith(to);

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full z-30 w-64 bg-white shadow-md flex flex-col flex-shrink-0 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-[#28337e] m-0">
              Admin Panel
            </h2>
            <div className="text-[11px] text-slate-400 truncate">
              {settings.brandName}
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1.5 text-slate-500 bg-transparent border-0"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          {navItems.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center px-5 py-3 text-sm transition-colors no-underline ${
                isActive(to)
                  ? 'bg-slate-50 text-[#28337e] font-bold border-r-3 border-[#28337e]'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#28337e]'
              }`}
            >
              <Icon className="mr-3 flex-shrink-0" size={18} />
              {label}
            </Link>
          ))}

          <Link
            to="/"
            className="flex items-center px-5 py-3 text-sm text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors no-underline mt-2"
          >
            <Home className="mr-3 flex-shrink-0" size={18} />
            Xem Website ngoài
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
          <div className="text-[11px] font-bold uppercase text-slate-400">
            Cấu hình mặc định
          </div>
          <button
            onClick={() => applyPreset('tham_tran')}
            className="w-full py-2 px-3 rounded-lg text-xs font-bold text-left border cursor-pointer transition-colors bg-[#2e7d32] text-white border-[#2e7d32]"
          >
            🌿 Hà Thảo Mộc (Ninh Bình)
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-1.5 text-slate-600 bg-transparent border-0"
            >
              <Menu size={22} />
            </button>
            <span className="text-sm font-semibold text-slate-700">
              Hệ thống Quản trị Nội dung & Sản phẩm (CMS)
            </span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#2e7d32] text-xs font-bold no-underline"
          >
            <ExternalLink size={13} />
            Mở trang chủ
          </Link>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<AdminDashboardPage />} />
            <Route path="/products" element={<AdminProductsPage />} />
            <Route path="/products/new" element={<AdminProductEditorPage />} />
            <Route
              path="/products/edit/:id"
              element={<AdminProductEditorPage />}
            />
            <Route path="/posts" element={<AdminPostsPage />} />
            <Route path="/posts/new" element={<AdminPostEditorPage />} />
            <Route path="/posts/edit/:id" element={<AdminPostEditorPage />} />
            <Route path="/orders" element={<AdminOrdersPage />} />
            <Route path="/settings" element={<AdminSettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
