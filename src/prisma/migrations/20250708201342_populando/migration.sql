-- CreateTable
CREATE TABLE "animais" (
    "id" TEXT NOT NULL,
    "nomeA" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "familia" TEXT NOT NULL,
    "ambiente" TEXT NOT NULL,
    "bioma" TEXT NOT NULL,
    "exemplares" INTEGER NOT NULL,
    "extincao" BOOLEAN NOT NULL,

    CONSTRAINT "animais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "populacoes" (
    "id" TEXT NOT NULL,
    "nomeA" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "filhos" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "populacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locais" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "proposito" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "locais_pkey" PRIMARY KEY ("id")
);
