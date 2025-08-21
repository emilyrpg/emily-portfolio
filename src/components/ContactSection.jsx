import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Mail, Twitch, X } from "lucide-react";
import { MapPin } from "lucide-react";
import { Send } from "lucide-react";

export const ContactSection = () => {
    {/* Toaster for messages */}
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "The magic crystals have been stolen!", /*"Party request sent",*/
                description: "A quest has been sent to the guild to retrieve them. Please send an email in the meantime."
                /*"An adventurer will respond shortly. Safe travels!",*/
            });
            setIsSubmitting(false);
        }, 1500);
    };

    {/* Clear form inputs*/}
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    {/* Handler for input changes */}
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    {/* Clear form handler */}
    const clearForm = () => {
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section id="contact" className="min-h-dvh pt-24 pb-8 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-primary drop-shadow-custom-dark text-3xl md:text-4xl font-press font-bold text-center mb-8">
                    Talk with Emily?
                </h2>

                <p className="font-vt text-2xl text-center text-muted-foreground mb-8 max-w-4xl mx-auto">
                    Welcome to my corner of the realm! Got something on your mind? Questions, stories, or complaints about 
                    wizards—I'm all ears. Leave a message...if you dare...
                </p>

                {/* Player Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-center">
                    <div className="flex flex-col items-center space-y-8">
                        <h3 className="font-press text-2xl font-semibold mb-6">
                            Player Details
                        </h3>

                        {/* Email */}
                        <div className="flex flex-col items-center space-x-0 space-y-3">
                            <div className="flex items-start space-x-4 -translate-x-3">
                                <div className="p-3 rounded-full gradient-bg/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-press text-xs text-foreground">
                                        Email:
                                    </h4>
                                    <a href="mailto: emilyros117@gmail.com" 
                                    className="font-press text-xs text-muted-foreground hover:text-primary transition-colors">
                                        emilyros117@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="flex flex-col items-center space-x-0 space-y-3">
                            <div className="flex items-start space-x-4 -translate-x-3">
                                <div className="p-3 rounded-full gradient-bg/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-center">
                                    <h4 className="font-press text-xs text-foreground">
                                        Location:
                                    </h4>
                                    <a href="https://www.google.com/maps/place/Bay+Area,+CA"
                                    className="font-press text-xs text-muted-foreground hover:text-primary transition-colors">
                                        Bay Area, CA
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-press text-xs mb-4"> Send a Friend Request</h4>
                            <div className="flex space-x-4 justify-center">
                                <a 
                                    href="https://www.linkedin.com/in/emilyros117/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin />
                                </a>
                                <a 
                                    href="https://www.twitch.tv/eggyems" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitch />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative bg-card p-8 rounded-lg shadow-xs border-4 border-border" >
                        {/* X button to clear form */}
                        <button
                            type="button"
                            onClick={clearForm}
                            aria-label="Clear form"
                            className="absolute top-4 right-4 p-1 rounded-full bg-red-500"
                            >
                                <X className="h-4 w-4 text-muted-foreground hover:text-zinc-700 transition-colors" />
                            </button>

                        <h3 className="text-2xl font-press font-semibold mb-6">
                            Contact Me
                        </h3>
                        {/* Name */}
                        <form className="space-y-6 font-nunito" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block font-medium mb-2"> 
                                    Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={cn("text-gray-800 w-full px-4 py-3 rounded-md bg-background border border-border",
                                                    "focus:outline-none focus:ring-2 focus:ring-primary")}
                                    placeholder="Enter your name" />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block font-medium mb-2"> 
                                    Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    className={cn("text-gray-800 w-full px-4 py-3 rounded-md bg-background border border-border",
                                                    "focus:outline-none focus:ring-2 focus:ring-primary")}
                                    placeholder="Enter your email" />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block font-medium mb-2"> 
                                    Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange} 
                                    rows={2}
                                    required 
                                    className={cn("text-gray-800 w-full px-4 py-3 rounded-md bg-background border border-border",
                                                    "focus:outline-none focus:ring-2 focus:ring-primary resize-none")}
                                    placeholder="Enter your message" />
                            </div>

                            {/* Submit Button */}
                            {/* Need to use an email API to get messages sent to my email */}
                            <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2"

                            )}
                            >
                                {isSubmitting ? "Message sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};