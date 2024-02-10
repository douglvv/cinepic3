"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const formSchema = z.object({
  query: z.string().max(50),
});

export default function SeachInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const params = new URLSearchParams(searchParams);

    if (values.query) params.set("query", values.query);
    else params.delete("query");

    const url = `/results?${params.toString()}`;

    replace(url);
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full items-center gap-2 max-w-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  className="ring-0 placeholder:text-neutral-400 text-neutral-200 
                  bg-transparent border-neutral-800 focus:border-neutral-800 sm:w-80 md:w-96"
                  placeholder="Search for a title"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="bg-transparent text-neutral-400 hover:text-neutral-200 w-fit"
          title="Search"
        >
          <Search />
        </button>
      </form>
    </Form>
  );
}
