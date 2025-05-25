-- CreateTable
CREATE TABLE "personality_types" (
    "id" UUID NOT NULL,
    "type_code" VARCHAR(20) NOT NULL,
    "type_name" VARCHAR(100) NOT NULL,
    "title" VARCHAR(500) NOT NULL,
    "theme_sentence" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "description_points" JSONB NOT NULL,
    "strength_keywords" JSONB NOT NULL,
    "weakness_keywords" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personality_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "personality_type_id" UUID NOT NULL,
    "question_text" TEXT NOT NULL,
    "question_order_in_type" INTEGER NOT NULL DEFAULT 1,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_attempts" (
    "id" UUID NOT NULL,
    "session_id" VARCHAR(255),
    "user_name" VARCHAR(100),
    "user_email" VARCHAR(255),
    "ip_address" VARCHAR(45),
    "user_agent" TEXT,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "completion_time" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "test_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_answers" (
    "id" UUID NOT NULL,
    "test_attempt_id" UUID NOT NULL,
    "question_id" INTEGER NOT NULL,
    "answer_option" VARCHAR(10),
    "score" INTEGER NOT NULL,
    "answer_time" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_results" (
    "id" UUID NOT NULL,
    "test_attempt_id" UUID NOT NULL,
    "primary_personality_type_id" UUID,
    "total_scores" JSONB NOT NULL,
    "percentage_scores" JSONB,
    "detailed_analysis" JSONB,
    "recommendations" JSONB,
    "share_token" VARCHAR(32),
    "is_shared" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "test_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "personality_types_type_code_key" ON "personality_types"("type_code");

-- CreateIndex
CREATE UNIQUE INDEX "user_answers_test_attempt_id_question_id_key" ON "user_answers"("test_attempt_id", "question_id");

-- CreateIndex
CREATE UNIQUE INDEX "test_results_test_attempt_id_key" ON "test_results"("test_attempt_id");

-- CreateIndex
CREATE UNIQUE INDEX "test_results_share_token_key" ON "test_results"("share_token");

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_personality_type_id_fkey" FOREIGN KEY ("personality_type_id") REFERENCES "personality_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_answers" ADD CONSTRAINT "user_answers_test_attempt_id_fkey" FOREIGN KEY ("test_attempt_id") REFERENCES "test_attempts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_answers" ADD CONSTRAINT "user_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_test_attempt_id_fkey" FOREIGN KEY ("test_attempt_id") REFERENCES "test_attempts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_primary_personality_type_id_fkey" FOREIGN KEY ("primary_personality_type_id") REFERENCES "personality_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;
