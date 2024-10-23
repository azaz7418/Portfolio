
export const downloadFile = (pdf) => {
    const fileUrl = pdf; 
    const fileName = "resume.pdf"; 
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();

    // Remove the anchor element afterward
    document.body.removeChild(anchor);
  };