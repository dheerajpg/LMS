"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TitleFormProps {
  intitalData: {
    title: string;
  }
  courseId: string;
}

const FormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).max(100, { message: "Keep title short and simple so that it's easy to remember" })
})

export const TitleForm = ({ intitalData, courseId }: TitleFormProps) => {
  return (
    <div>
      Title FOrm
    </div>
  )
}