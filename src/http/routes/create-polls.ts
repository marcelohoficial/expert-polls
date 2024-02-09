import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function createPoll(app: FastifyInstance) {
  app.post("/polls", async (request, reply) => {
    const createPollBody = z.object({
      title: z.string({
        required_error: "Você deve informar o titulo da enquete",
      }),
      options: z.array(
        z.string({ required_error: "Você deve inserir pelo menos uma opção" })
      ),
    });

    const { title, options } = createPollBody.parse(request.body);

    const poll = await prisma.poll.create({
      data: {
        title,
        options: {
          createMany: {
            data: options.map((option) => {
              return { title: option };
            }),
          },
        },
      },
    });

    return reply.status(201).send({ pollId: poll.id });
  });
}
