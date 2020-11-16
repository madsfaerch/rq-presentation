type CodeProps = {
  code: string;
};

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function Code({ code }: CodeProps) {
  return <pre dangerouslySetInnerHTML={{ __html: escapeHtml(code) }} />;
}
