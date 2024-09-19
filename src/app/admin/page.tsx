import CreatePostForm from "./CreatePostForm";

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
        Admin Dashboard
      </h1>
      <CreatePostForm />
    </div>
  );
}
