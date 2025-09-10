"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

export default function FeaturesSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  {t("contact.title")}
                </h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6">
                  {t("contact.description")}
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                <li>
                  <Link href="mailto:info@bedirhanugurlu.com" className="hover:text-accent-foreground">
                    <Mail className="size-5 mr-2 inline" />
                    <span>info@bedirhanugurlu.com</span>
                  </Link>
                </li>
                <li>
                  <Link href="#link" className="hover:text-accent-foreground">
                    <MapPin className="size-5 mr-2 inline" />
                    <span>{t("contact.location")}</span>
                  </Link>
                </li>
              </ul>
            </ScrollView>
          </div>
          <div className="lg:col-span-3">
            <ScrollView>
              <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full">
                <div>
                  <h3 className="text-lg font-semibold">
                    {t("contact.formTitle")}
                  </h3>
                  <p className="mt-4 text-sm">
                    {t("contact.formDescription")}
                  </p>
                </div>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitStatus('idle');
                    
                    const formData = new FormData(e.target as HTMLFormElement);
                    const name = formData.get('name') as string;
                    const email = formData.get('email') as string;
                    const message = formData.get('message') as string;
                    
                    try {
                      // Nodemailer API endpoint'ini kullan
                      const response = await fetch('/api/send-email', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          name,
                          email,
                          message,
                          to: 'bedirhanugurlu3661@gmail.com',
                          subject: 'Portfolio Contact Form'
                        }),
                      });
                      
                      if (response.ok) {
                        setSubmitStatus('success');
                        (e.target as HTMLFormElement).reset();
                      } else {
                        setSubmitStatus('error');
                      }
                    } catch (error) {
                      console.error('Error sending email:', error);
                      setSubmitStatus('error');
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
                >
                  <div>
                    <Label htmlFor="name">{t("contact.fullName")}</Label>
                    <Input type="text" id="name" name="name" required />
                  </div>

                  <div>
                    <Label htmlFor="email">{t("contact.email")}</Label>
                    <Input type="email" id="email" name="email" required />
                  </div>

                  <div>
                    <Label htmlFor="msg">{t("contact.message")}</Label>
                    <Textarea id="msg" name="message" rows={3} required />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? t("contact.sending") : t("contact.submit")}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-sm">
                      {t("contact.success")}
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-sm">
                      {t("contact.error")}
                    </div>
                  )}
                </form>
              </Card>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
