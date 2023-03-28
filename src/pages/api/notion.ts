import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

// Notion Instance
const auth = process.env.SECRET;
const database_id = process.env.DB_KEY ?? "";
const notion = new Client({ auth });

// Body Props

interface IBodyProps {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { nome, email, assunto, mensagem }: IBodyProps = req.body;

  console.log(auth);

  try {
    const response = await notion.pages.create({
      parent: {
        database_id,
      },
      properties: {
        Nome: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: nome,
              },
            },
          ],
        },
        Email: {
          type: "email",
          email: email,
        },
        Assunto: {
          type: "rich_text",
          rich_text: [
            {
              text: {
                content: assunto,
              },
            },
          ],
        },
      },
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [{ type: "text", text: { content: mensagem } }],
          },
        },
      ],
    });
    res.status(201).json({ response, message: "Sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro" });
  }
};

export default handler;
