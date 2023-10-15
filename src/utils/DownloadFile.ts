export async function downloadFile(fileUrl: string) {
	const tempLink = document.createElement("a");
	tempLink.style.display = "none";
	tempLink.href = fileUrl;
	tempLink.setAttribute("download", fileUrl);
	tempLink.setAttribute("target", "_blank");

	if (typeof tempLink.download === "undefined" || tempLink.download === "") {
		tempLink.setAttribute("target", "_blank");
	}

	document.body.appendChild(tempLink);
	tempLink.click();

	setTimeout(function () {
		document.body.removeChild(tempLink);
	}, 200);
}
