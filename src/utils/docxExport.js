import { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel } from "docx";
import { saveAs } from "file-saver";

export async function generateResume(data) {
  const { name, email, phone, jobs } = data;

  const children = [];

  // Name Header
  children.push(
    new Paragraph({
      text: name || "Your Name",
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  // Contact Info
  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: `${email || "email@example.com"} | ${phone || "(123) 456-7890"}`, size: 24 }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    })
  );

  // Experience Header
  if (jobs && jobs.length > 0) {
    children.push(
      new Paragraph({
        text: "EXPERIENCE",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 200 },
        border: {
          bottom: {
            color: "000000",
            space: 1,
            value: "single",
            size: 12,
          },
        },
      })
    );

    // Jobs
    for (const job of jobs) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: job.company || "Company Name", bold: true, size: 24 }),
            new TextRun({ text: "\t" }), // Tab for spacing if we were using tab stops, but we'll keep it simple
            new TextRun({ text: job.title ? ` - ${job.title}` : " - Job Title", italics: true, size: 24 }),
          ],
          spacing: { before: 200, after: 100 },
        })
      );
      
      if (job.startDate || job.endDate) {
          children.push(
              new Paragraph({
                  children: [
                      new TextRun({ text: `${job.startDate || ""} - ${job.endDate || "Present"}`, size: 22, italics: true, color: "555555" }),
                  ],
                  spacing: { after: 100 },
              })
          );
      }

      if (job.description) {
        const lines = job.description.split("\n");
        for (const line of lines) {
          if (line.trim().length > 0) {
            // Clean up the bullet point character if it's there
            let cleanLine = line.replace(/^[•\-\*]\s*/, '').trim();
            children.push(
              new Paragraph({
                text: cleanLine,
                bullet: {
                  level: 0,
                },
                spacing: { after: 100 },
              })
            );
          }
        }
      }
    }
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${name ? name.replace(/\s+/g, "_") : "Resume"}_Resume.docx`);
}
