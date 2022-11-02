import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Layout } from "../components/Layout";
import { ContactInput, enquiryTypes, Inputs } from "../utils/contact";
import { trpc } from "../utils/trpc";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate, error, isLoading } = trpc.contact.useMutation({
    onSuccess: () => {
      setShowSuccess(true);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(ContactInput) });

  return (
    <Layout>
      {showSuccess ? (
        <>
          <p>
            Nice, I’ve got your details and I should be be in touch within a few
            days. Thank you for taking the time to fill out the form, I really
            appreciate it. I look forward to chatting!
          </p>
          <p>
            In the meantime, why not see what I’ve been tweeting{" "}
            <a href="/twitter">@samkingco</a>, or hop in my{" "}
            <a href="/discord">Discord</a> and say hi.
          </p>
        </>
      ) : (
        <>
          <p>
            If you’d like to know more about working together, or if you just
            want a sounding board for an idea, leave your details in the form
            below and I’ll get back to you ASAP.
          </p>

          <hr />

          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="contact-form"
          >
            <div className="input-group">
              <div>
                <label htmlFor="name">What’s your name?</label>
                <p className="subdued small">I go by Sam (he/him)</p>
              </div>
              <input
                id="name"
                defaultValue=""
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="error small">{errors.name.message}</p>
              )}
            </div>

            <div className="input-group">
              <p>What’s on your mind?</p>
              <div className="radio-group">
                {enquiryTypes.map(({ value, label }) => (
                  <React.Fragment key={`radio_${value}`}>
                    <input
                      type="radio"
                      id={value}
                      value={value}
                      {...register("enquiryType")}
                    />
                    <label htmlFor={value}>{label}</label>
                  </React.Fragment>
                ))}
                {errors.enquiryType && (
                  <p className="error small">{errors.enquiryType.message}</p>
                )}
              </div>
            </div>

            <div className="input-group">
              <div>
                <label htmlFor="context">
                  Can you give me a bit of context?
                </label>
                <p className="subdued small">
                  This helps me get a sense of where I might be able to help.
                  Details are good, but don’t worry if you don’t have them yet,
                  any info is good!
                </p>
              </div>
              <textarea
                id="context"
                rows={5}
                {...register("context", { required: true })}
              />
              {errors.context && (
                <p className="error small">{errors.context.message}</p>
              )}
            </div>

            <div className="input-group">
              <div>
                <label htmlFor="contact">How can I contact you?</label>
                <p className="subdued small">
                  An email address or twitter handle is perfect
                </p>
              </div>
              <input
                id="contact"
                type="text"
                inputMode="email"
                {...register("contact", { required: true })}
              />
              {errors.contact && (
                <p className="error small">{errors.contact.message}</p>
              )}
            </div>

            <div className="contact-form-footer">
              <button
                type="submit"
                disabled={isLoading}
                className={isLoading ? "loading" : ""}
              >
                {isLoading && (
                  <span className="loading-wrapper">
                    <span className="loading-indicator" />
                  </span>
                )}
                Send
              </button>
            </div>

            {error && (
              <div>
                <p className="error small">
                  Something went wrong: {error.message}
                </p>
              </div>
            )}
          </form>
        </>
      )}
    </Layout>
  );
}
