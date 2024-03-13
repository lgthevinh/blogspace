import Navbar from "@/components/Navbar";
import BreadCrumbs from "@/components/BreadCrumbs";
import SideTab from "@/components/SideTab";
import Footer from "@/components/Footer";
import BlogTab from "@/components/BlogTab";

export default function BlogPage({ params }) {
  const id = params.id;
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: `Blog ID: ${id}`, url: `/blog/${id}` },
  ];
  return (
    <main className="bg-white">
      <Navbar/>
      <div className="lg:w-[70%] lg:px-0 px-3 mx-auto min-h- 9 pb-5">
        <div className="grid grid-cols-4 relative mt-0">
          <div className="relative lg:col-span-1 col-span-4">
            <SideTab/>
          </div>
          <div className="lg:col-span-3 col-span-4 lg:px-5">
            <BreadCrumbs urls={breadcrumbs} />
            <BlogTab blog_id={id} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
