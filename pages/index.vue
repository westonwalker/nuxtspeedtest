<template>
  <div>
    <div class="bg-white">
      <main>
        <!-- <nuxt-img
          class="h-full w-full object-cover"
          src="/peopleworking.png"
          alt="People working on laptops"
          sizes="sm:100vw md:100vw lg:90vw"
          quality="80"
          format="webp"
        />-->
        <!--
        #A2ECEF

        #FDF6B3
        -->
        <!-- Hero section -->
        <section class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2"></div>
          <div class="max-w-[85rem] mx-auto sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:rounded-3xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <nuxt-img class="h-full w-full object-cover" src="/radiant-gradient.svg" alt="Radiant background" />
              </div>
              <div class="relative flex flex-col-reverse md:inline-flex md:flex-row px-8 md:px-0 md:pl-16 lg:pl-24 items-center">
                <div class="w-full md:w-1/2 h-full md:pr-12 py-12">
                  <HeaderOne>
                    <span class="block text-black">Get Your Business Website for $0 Upfront</span>
                  </HeaderOne>
                  <p class="mt-6 mx-auto text-left text-lg lg:text-2xl text-black sm:max-w-3xl leading-relaxed">
                    Forget the page builders and WordPress - We deliver hand-coded websites with blazing speeds starting at $200/mo.
                  </p>
                  <div class="mt-6">
                    <ButtonLight href="#pricing">
                      See Plans
                    </ButtonLight>
                  </div>
                </div>
                <div class="w-full md:w-1/2">
                  <nuxt-img width="563" height="811" class="h-full w-full object-cover hidden md:block" src="/hand-3.png" alt="People working on laptops" sizes="sm:100vw md:100vw lg:90vw" quality="80" format="webp" />
                  <nuxt-img width="269" height="242" class="h-auto w-96 mx-auto block md:hidden" src="/sm-phone.png" alt="People working on laptops" sizes="sm:100vw md:100vw lg:90vw" quality="80" format="webp" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Testimonial -->
        <section class="">
          <InnerSection>
            <svg class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-workcation">
              <title id="svg-workcation">Webjoy</title>
              <defs>
                <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
            </svg>
            <div class="relative">
              <Testimonial />
            </div>
          </InnerSection>
        </section>

        <!-- About -->
        <section class="bg-gray-100" id="about">
          <InnerSection>
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-2/5 md:pr-4">
                <HeaderTwo class="text-left">
                  Website Design
                  <br />
                  <div class="pt-2">for Small Businesses</div>
                </HeaderTwo>
                <p class="text-left text-lg lg:text-2xl leading-relaxed mt-6 text-gray-800">
                  We specialize in website design and development for small businesses. Our plans start at $200 a month. No minimum contract. You own your domain and content. Cancel anytime with no surprising fees or hassle.
                </p>
              </div>
              <div class="w-full md:w-3/5 md:pl-4 mt-8 md:mt-0">
                <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
                  <ServiceFeature title="Web design and development" description="Includes over 30 hours of design, development, and testing." />
                  <ServiceFeature title="24/7 support" description="A direct line to the lead developer. Call anytime." />
                  <ServiceFeature title="Unlimited Site Edits" description="We will update your site content at anytime." />
                  <ServiceFeature title="Hosting fees included" description="Hosting fees are baked into the monthly price." />
                  <ServiceFeature title="Domain Registration" description="If you don't have a domain, we will help you get one." />
                  <ServiceFeature title="Google setup" description="We will setup Google Analytics and Google My Business for you." />
                </dl>
              </div>
            </div>
            <div class="mt-16 text-center">
              <ButtonDark href="#pricing">
                See Plans
              </ButtonDark>
            </div>
          </InnerSection>
        </section>

        <section class="bg-white">
          <InnerSection>
            <HeaderTwo class="text-left md:text-center">
              Hand Crafted
            </HeaderTwo>
            <p class="text-left md:text-center text-lg lg:text-2xl leading-relaxed mt-6 text-gray-800">
              Our websites are 100% hand coded. This gives us full control over the design and performance of your site.
            </p>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <WebsiteFeature title="Performance" description="A major issue with DIY website builders is that they are incredibly slow. Users leave a site if it takes longer than 3 seconds to load. Your website will score at least a 95 on Google’s speed scores.">
                <span class="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#A2ECEF] to-[#FDF6B3] rounded-md shadow-lg">
                  <svg class="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </span>
              </WebsiteFeature>
              <WebsiteFeature title="Responsive" description="60% of web traffic is on mobile devices, so it is important for your site to look nice on all screen sizes. Your website will fit all device screen sizes so your clients can access it anywhere.">
                <span class="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#A2ECEF] to-[#FDF6B3] rounded-md shadow-lg">
                  <svg class="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </span>
              </WebsiteFeature>
              <WebsiteFeature title="SEO" description="Search engine optimization (SEO) is a set of best practices to help search engines (Google) rank a website for relavant searches. Your website will follow all of the modern SEO best practices.">
                <span class="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#A2ECEF] to-[#FDF6B3] rounded-md shadow-lg">
                  <svg class="h-8 w-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </WebsiteFeature>
            </div>
            <div class="pt-12 text-center">
              <ButtonDark href="#pricing">
                See Plans
              </ButtonDark>
            </div>
          </InnerSection>
        </section>

        <!-- Pricing -->
        <section class="bg-[#e6feff]" id="pricing">
          <InnerSection>
            <div>
              <HeaderTwo class="text-left md:text-center">
                Let's Keep It Simple
              </HeaderTwo>
              <p class="text-left md:text-center text-lg lg:text-2xl leading-relaxed mt-6 text-gray-800">
                No contracts, no surprises. Just simple, transparent pricing.
              </p>
            </div>
            <div class="pt-10 relative lg:grid lg:grid-cols-7">
              <div class="md:max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div class="relative z-10 rounded-lg shadow-2xl">
                  <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3 class="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">Standard</h3>
                      <div class="mt-4 flex items-center justify-center">
                        <span class="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span class="mt-2 mr-2 text-4xl font-medium"> $ </span>
                          <span class="font-extrabold"> 200 </span>
                        </span>
                        <span class="text-2xl font-medium text-gray-500"> /month </span>
                      </div>
                    </div>
                  </div>
                  <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-10 bg-gray-50 sm:px-24 sm:py-10">
                    <ul role="list" class="space-y-4">
                      <PricingFeature description="Unlimited Site Edits" />
                      <PricingFeature description="Hosting fees included" />
                      <PricingFeature description="24/7 support" />
                      <PricingFeature description="Lifetime Support" />
                      <PricingFeature description="2 Week Delivery" />
                    </ul>
                    <div class="mt-12 text-center">
                      <ButtonDark href="google.com">
                        Schedule a Call
                      </ButtonDark>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InnerSection>
        </section>

        <!-- Faq -->
        <section class="bg-white" id="faq">
          <InnerSection>
            <div class="max-w-3xl mx-auto">
              <div>
                <HeaderTwo class="text-center">
                  Frequently asked questions
                </HeaderTwo>
              </div>
              <dl class="mt-6 space-y-6 divide-y divide-gray-800">
                <Faq question="How many pages do I get with my site?">
                  Our standard $0 down, $200/month package includes 5 pages. These are typically Home, About, Services, Portfolio, Contact but can be adjusted if it doesn't make sense for your industry.
                </Faq>
                <Faq question="What if I want more than 5 pages?">
                  Extra pages are a one time, $150 fee.
                </Faq>
                <Faq question="Do I get a contact form with my site?">
                  Yes, the contact page includes a contact form. You will receive an email notification when a customer fills it out.
                </Faq>
                <Faq question="Is it really unlimited site edits?">
                  Yes! We will update your content for free for any of the 5 original pages that were created. If you want to create a new page, it is a $150 one time fee.
                </Faq>
                <Faq question="How fast will my site be done?">
                  A typical site from scratch will be done and live in 2 weeks.
                </Faq>
                <Faq question="Are there any contracts to use your service?">
                  There are no contracts or commitments to use Webjoy. You can cancel anytime you wish.
                </Faq>
                <Faq question="I don't own a URL for my business. Can you help?">
                  Yes, part of the service you get with Webjoy is helping purchase a URL.
                </Faq>
              </dl>
            </div>
          </InnerSection>
        </section>

        <!-- Contact -->
        <section class="bg-[#fffeda]" id="contact">
          <InnerSection>
            <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
              <div class="pb-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:pb-24 xl:pr-12">
                <div class="mx-auto">
                  <HeaderTwo>Get in touch</HeaderTwo>
                  <p class="mt-3 text-lg leading-6 text-gray-500">Have questions? Fill out our form and we will get back to you as soon as possible. </p>
                </div>
              </div>
              <div class="bg-white py-8 px-4 sm:px-6 lg:col-span-3 lg:py-12 lg:px-8 xl:pl-12 rounded-lg shadow-2xl">
                <div class="max-w-lg mx-auto lg:max-w-none">
                  <form name="contact" method="POST" netlify class="grid grid-cols-1 gap-y-6" action="/">
                    <input type="hidden" name="form-name" value="contact">
                    <div>
                      <label for="full-name" class="sr-only">Full name</label>
                      <input required type="text" name="full-name" id="full-name" autocomplete="name" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Full name">
                    </div>
                    <div>
                      <label for="email" class="sr-only">Email</label>
                      <input required id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Email">
                    </div>
                    <div>
                      <label for="phone" class="sr-only">Phone</label>
                      <input required type="text" name="phone" id="phone" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Phone">
                    </div>
                    <div>
                      <label for="message" class="sr-only">Message</label>
                      <textarea required minlength="10" id="message" name="message" rows="4" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Message"></textarea>
                    </div>
                    <div>
                      <button type="submit" class="bg-black text-white px-6 py-4 text-base md:text-xl rounded-md font-semibold shadow-solid-light">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </InnerSection>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import Testimonial from "../components/Testimonial.vue";
import Header1 from "../components/HeaderTwo.vue";
import ButtonLight from "../components/ButtonLight.vue";
import ButtonDark from "../components/ButtonDark.vue";
export default {
  name: "IndexPage",
  head: {
    title: "WebJoy",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Small business website for $0 upfront.",
      },
    ],
  },
  components: { Testimonial, Header1, ButtonLight, ButtonDark },
};
</script>
