import MarkdownIt from "markdown-it";
import dynamic from "next/dynamic";
import "react-markdown-editor-lite/lib/index.css";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const EditPage: React.FC = () => {
  const mdParser = new MarkdownIt();
  const handleEditorChange = (html: any, text: any) => {
    console.log("handleeditchange", html, text);
  };
  return (
    <MdEditor
      style={{ height: "500px" }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
      allowPasteImage={true}
      onImageUpload={async (file: File) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(
              "https://i0.wp.com/blog.ted.com/wp-content/uploads/sites/2/2021/03/TED015-TED-2021_TED-Blog-870x653-01.png?resize=283%2C212&ssl=1"
            );
          }, 100);
        });
      }}
    />
  );
};

export default EditPage;
