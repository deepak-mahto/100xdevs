import axios from "axios";

export default async function BlogPage({
  params,
}: {
  params: Promise<{
    blogId: string;
  }>;
}) {
  const blogId = (await params).blogId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${blogId}`
  );
  const data = response.data;
  return (
    <div>
      <h1>Blog {blogId}</h1>
      <h2>{data.title}</h2>
    </div>
  );
}
