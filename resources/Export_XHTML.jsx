// Export to XHTML removing the generation of CSS
//
// Modified from various sources
// Created for Multi-Platform Publishing
// Chris Jennings January 2017
// Version 2 for 2018 - now asks for user input

GetXHTML();

function GetXHTML() {
	// Check to see whether any InDesign documents are open.
	// If no documents are open, display an error message.
	if (app.documents.length > 0) {
		var myDoc = app.activeDocument;
		// Build the filename
		var myDocName = decodeURI(myDoc.fullName);
		var myDocBaseName = myDocName.substring(0, myDocName.lastIndexOf("."));
		// Export the pages to XHTML
		// add more options as necessary


		with (myDoc.htmlExportPreferences) {
			viewDocumentAfterExport = false;
			bulletListExportOption = BulletListExportOption.UNORDERED_LIST;
			generateCascadeStyleSheet = false;
			includeClassesInHTML = true;
			imageSizeOption = ImageSizeOption.SIZE_RELATIVE_TO_TEXT_FLOW
			exportOrder = ExportOrder.XML_STRUCTURE_ORDER;
			numberedListExportOption = NumberedListExportOption.ORDERED_LIST;
			preserveLocalOverride = false;

		}

			myDoc.exportFile(ExportFormat.HTML, new File(myDocBaseName + ".xhtml"), false);

				alert("Success!\nCompleted and saved here:\n\n"+myDocBaseName + ".xhtml" + XML_STRUCTURE_ORDER);

		}
	else {
		// No documents are open, so display an error message.
		alert("No InDesign documents are open. Please open a document and try again.")
	}
}
