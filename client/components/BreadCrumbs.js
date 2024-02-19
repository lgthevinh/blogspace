const default_urls = [
  { name: "Home", url: "/" },
];
const BreadCrumbs = (props) => {
  const urls = props.urls || default_urls;
  const url_list = urls.map((url, index) => {
    return (
      <li key={index}>
        <a href={url.url} className="text-slate-400 hover:text-slate-500">
          {url.name}
        </a>
      </li>
    );
  }
  );
  return (
    <div className="text-sm breadcrumbs text-slate-600 sticky top-16 z-40 bg-white">
      <ul>
        {url_list}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
