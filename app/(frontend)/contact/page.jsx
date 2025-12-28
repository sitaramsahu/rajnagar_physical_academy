import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, CreditCard } from "lucide-react";
import { ContactForm } from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ready to unlock your destiny? Reach out to us for a personalized
              consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
                Book Your Consultation
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">
                          Phone / WhatsApp
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          +91 96089 88532
                        </p>
                        <Button
                          asChild
                          variant="link"
                          className="h-auto p-0 text-sm"
                        >
                          <a
                            href="https://wa.me/7321929120"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Chat on WhatsApp →
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">
                          Email
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          anandabha88@gmail.com
                        </p>
                        <Button
                          asChild
                          variant="link"
                          className="h-auto p-0 text-sm"
                        >
                          <a href="mailto:anandabha88@gmail.com">
                            Send an email →
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bank Transfer Info */}
              {/* <div>
                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                  Payment via Bank Transfer
                </h3>
                <Card className="border-accent/50 bg-gradient-to-br from-accent/5 to-background">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-2 text-accent">
                      <CreditCard className="h-5 w-5" />
                      <span className="font-semibold">Bank Details</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Bank Name:
                        </span>
                        <span className="font-medium text-foreground">
                          State Bank of India
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Account Name:
                        </span>
                        <span className="font-medium text-foreground">
                          Astro Abha
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Account Number:
                        </span>
                        <span className="font-medium text-foreground font-mono">
                          XXXX XXXX XXXX
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          IFSC Code:
                        </span>
                        <span className="font-medium text-foreground font-mono">
                          SBIN0XXXXXX
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground">
                      Please share payment confirmation via WhatsApp or email
                      after transfer
                    </p>
                  </CardContent>
                </Card>
              </div> */}

              {/* Quick Actions */}
              <div className="space-y-3">
                <Button asChild className="w-full" size="lg">
                  <a
                    href="https://wa.me/7321929120"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent"
                  size="lg"
                >
                  <a href="mailto:anandabha88@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
