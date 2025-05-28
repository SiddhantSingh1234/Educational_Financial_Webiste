'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Start learning with basic features",
    features: [
      "Access to 10 basic lessons",
      "5 educational games",
      "Basic progress tracking",
      "Limited coin earning (500 max)",
      "Ad-supported experience"
    ],
    limitations: [
      "Limited lesson access",
      "No advanced games",
      "No parent dashboard",
      "No downloadable resources"
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline" as const
  },
  {
    id: "premium",
    name: "Premium",
    price: "$7.99",
    period: "monthly",
    description: "Full access to all educational content",
    features: [
      "Access to all 200+ lessons",
      "30+ educational games",
      "Detailed progress tracking",
      "Unlimited coin earning",
      "Ad-free experience",
      "Parent dashboard with insights",
      "Downloadable worksheets",
      "Priority support"
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const
  },
  {
    id: "family",
    name: "Family",
    price: "$14.99",
    period: "monthly",
    description: "Perfect for siblings and family learning",
    features: [
      "Everything in Premium",
      "Up to 4 child accounts",
      "Family leaderboards",
      "Collaborative challenges",
      "Family progress reports",
      "Customized learning paths",
      "Quarterly parent webinars"
    ],
    popular: false,
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const
  }
];

export default function SubscriptionPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const getPlanPrice = (plan: typeof plans[0]) => {
    if (plan.id === 'free') return '$0';
    if (billingPeriod === 'yearly') {
      const monthlyPrice = parseFloat(plan.price.replace('$', ''));
      const yearlyPrice = (monthlyPrice * 10).toFixed(2); // 2 months free
      return `$${yearlyPrice}`;
    }
    return plan.price;
  };

  const getPlanPeriod = (plan: typeof plans[0]) => {
    if (plan.id === 'free') return '';
    return billingPeriod === 'monthly' ? '/month' : '/year';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your <span className="text-blue-500">Plan</span></h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Select the perfect subscription to enhance your child's financial education journey
        </p>
        
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Button 
            variant={billingPeriod === 'monthly' ? "default" : "outline"}
            onClick={() => setBillingPeriod('monthly')}
            className="relative"
          >
            Monthly
          </Button>
          <Button 
            variant={billingPeriod === 'yearly' ? "default" : "outline"}
            onClick={() => setBillingPeriod('yearly')}
            className="relative"
          >
            Yearly
            <Badge 
              variant="secondary" 
              className="absolute -top-2 -right-2 bg-green-100 text-green-800 border-green-200 text-xs px-2"
            >
              Save 17%
            </Badge>
          </Button>
        </div>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={`h-full flex flex-col ${plan.popular ? 'border-blue-400 border-2 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2 flex items-end">
                  <span className="text-3xl font-bold">{getPlanPrice(plan)}</span>
                  <span className="text-muted-foreground ml-1">{getPlanPeriod(plan)}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  
                  {plan.limitations && (
                    <div className="mt-4 pt-4 border-t">
                      {plan.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </div>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={plan.id === 'free' ? '/signup' : '/signup?plan=' + plan.id} className="w-full">
                  <Button variant={plan.buttonVariant} className="w-full">
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Can I switch plans later?</h3>
            <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes will be applied to your next billing cycle.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">How does the free trial work?</h3>
            <p className="text-muted-foreground">The 14-day free trial gives you full access to all premium features. You won't be charged until the trial ends, and you can cancel anytime.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Is there a refund policy?</h3>
            <p className="text-muted-foreground">Yes, we offer a 30-day money-back guarantee if you're not satisfied with your subscription.</p>
          </div>
        </div>
      </div>
    </div>
  );
}