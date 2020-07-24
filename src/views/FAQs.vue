<template>
  <div class="min-h-screen pb-6">
    <p-header />

    <div
      class="max-w-screen-xl px-4 pt-12 pb-16 mx-auto sm:pt-16 sm:pb-20 sm:px-6 lg:px-8"
    >
      <div class="max-w-3xl mx-auto">
        <h2
          class="text-3xl font-extrabold leading-9 text-center text-gray-900 sm:text-4xl sm:leading-10"
        >
          Frequently Asked Questions
        </h2>
        <div class="pt-6 mt-6 border-t-2 border-gray-200">
          <dl>
            <div
              class="pt-6 mt-6 border-t border-gray-200 first:pt-0 first:mt-0 first:border-0 first:border-transparent"
              v-for="faq in faqs"
              :key="faq.id"
            >
              <dt class="text-lg leading-7">
                <button
                  class="flex items-start justify-between w-full text-left text-gray-400 focus:outline-none focus:text-gray-900"
                  @click.prevent="faq.isActive = !faq.isActive"
                >
                  <span
                    class="font-medium text-gray-900"
                    v-text="faq.question"
                  ></span>
                  <span class="flex items-center ml-6 h-7">
                    <svg
                      class="w-6 h-6 transition-all duration-200 transform"
                      :class="{
                        '-rotate-180': faq.isActive,
                        'rotate-0': !faq.isActive,
                      }"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <transition
                enter-active-class="duration-300 ease-out"
                enter-class="max-h-0"
                enter-to-class="max-h-64"
                leave-active-class="duration-200 ease-in"
                leave-class="max-h-64"
                leave-to-class="max-h-0"
              >
                <dd class="pr-12 mt-2" v-show="faq.isActive">
                  <p
                    class="text-base leading-6 text-gray-500"
                    v-text="faq.answer"
                  ></p>
                </dd>
              </transition>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import pHeader from '@/components/pHeader'

export default {
  name: 'FAQs',
  data: () => ({
    faqs: [
      {
        id: 1,
        isActive: false,
        question: 'WHAT IS Plexus Market?',
        answer:
          'Plexus Market is a cloud based personalized dynamic video rendering platform that can be used to hyper-target your audience with individualized content at scale. It’s a cost-effective solution to help your next campaign breakthrough, drive your next story, or power your next big idea.',
      },
      {
        id: 2,
        isActive: false,
        question: 'HOW DOES Plexus Market WORK?',
        answer:
          'We integrate data into videos to individualize content for a higher rate of engagement. We do this by taking information about the user and who they are, and match it with content they want to see and deliver an entertaining video viewable on mobile and desktop devices.',
      },
      {
        id: 3,
        isActive: false,
        question: 'HOW LONG DOES IT TAKE TO MAKE SOMETHING?',
        answer:
          'We can build a dynamic video in anywhere from one day to four weeks depending on the level of complexity and scale of production. We’re able to operate very quickly because of our pre-built authoring interface and templated video delivery system.',
      },
      {
        id: 4,
        isActive: false,
        question: 'DO YOU OFFER CUSTOMER SUPPORT?',
        answer:
          'Yes, we offer 24/7 customer support along with on-site support for events and installations.',
      },
      {
        id: 5,
        isActive: false,
        question:
          'DO YOU INTEGRATE WITH AFTER EFFECTS OR OTHER VIDEO SOFTWARE?',
        answer:
          'Our system is a simplified, streamlined service that works with After Effects. We take assets built in editing and vfx software like AE, and import them into Plexus Market for an optimized rendering experience.',
      },
      {
        id: 6,
        isActive: false,
        question: 'DO I NEED TO KNOW HOW TO CODE?',
        answer:
          'No, there is no requirement to code anything at all. We’ve done all the hard work for you. You can simply plug and play your video assets or website with our pre-built components to render a video with UGC in it. For more advanced custom features that involve algorithms and rules, you CAN further customize the dynamic video by using basic coding techniques with our easy to follow api. However, this is completely optional, and we offer full, affordable services to build those features for you.',
      },
      {
        id: 7,
        isActive: false,
        question:
          'DO I NEED TO USE LIVE ACTION PRODUCTION OR CAN I USE MOTION GRAPHICS?',
        answer:
          'You can use both live action, or motion graphics. They both work well in dynamic videos, and there is no one way of doing it. We can help facilitate either way and provide guidance in creating the experience.',
      },
      {
        id: 8,
        isActive: false,
        question: 'CAN YOU DEVELOP MY WEBSITE?',
        answer:
          'Yes, we can either work with your team so you can create your own website and integrate our API into it, or we can build a streamlined website for you no matter what the level. Our development team has been on numerous award-winning projects for over a decade.',
      },
      {
        id: 9,
        isActive: false,
        question: 'CAN YOU MAKE ME A PROTOTYPE?',
        answer:
          'Yes, give us a call, or send us an email with your specs and any assets you have and we will turn it into a working prototype.',
      },
      {
        id: 10,
        isActive: false,
        question: 'WHAT HAPPENS IF MY CAMPAIGN GOES VIRAL?',
        answer:
          'Congratulations, you’ve struck gold with your video, but you’re probably worried about cost. It’s a pay-for-performance model so you only pay for what you use. If the campaign takes off, we can adjust the rate to reflect a higher volume discounted render rate to make sure you’re getting a sensible ROI on your successful experience. Because it’s a personalized, hyper-targeted video, each view is a more qualified view with real eyes on the video so the value in this type of video is actually much higher than a traditional video campaign.',
      },
      {
        id: 11,
        isActive: false,
        question: 'DO YOU FACILITATE LIVE ACTION PRODUCTION?',
        answer:
          'Yes, we have award winning Plexus Market certified partners to help create your live action content no matter what the scale. Please call us for quotes.',
      },
      {
        id: 12,
        isActive: false,
        question: 'SO, CAN I TRY IT?',
        answer:
          'Give us a call or drop us a line at plexus.market@gmail.com with any details you can send and we’ll get back to you right away with a recommended direction.',
      },
      {
        id: 13,
        isActive: false,
        question: 'WHAT KIND OF DATABASE DOES Plexus Market NEED?',
        answer:
          'It depends on your needs. Plexus Market doesn’t require any database to run, it can just take uploaded content, and return a video to each user. Alternatively, you can have a separate database that has your user data you want to use in the creation of each video, and our api will pull that data into it when creating the video. You can even give us an excel spreadsheet to batch render out videos used for an email campaign.',
      },
      {
        id: 14,
        isActive: false,
        question:
          'IS THERE A LIMITATION ON HOW MANY VARIABLES I CAN PUT INTO THE VIDEO?',
        answer:
          'There is no real limit, but generally, 10-12 variables would make sense for a limit in a 60 second video. Some videos only need 1 variable to be effective, others, like bill explainer videos, can need a number of dynamic moments to effectively make the video valuable to the viewer. Keep in mind, the more variables that need to get rendered in the video, the longer it can take to render, depending on how long they are on screen for, and the complexity of the animation. This doesn’t affect cost though, just render time which usually is between 5-30 seconds. We can pre-render videos in many cases to mitigate wait times in certain instances.',
      },
      {
        id: 15,
        isActive: false,
        question: 'DOES THE COST CHANGE THE MORE DYNAMIC PIECES I RENDER?',
        answer:
          'The cost doesn’t change for Plexus Market to render the video, or to even store the video. The more we put into a video, however, the more time it takes to implement. Luckily, our embarrassingly low development costs mean you don’t actually pay that much more.',
      },
      {
        id: 16,
        isActive: false,
        question:
          'CAN I INTEGRATE ALL OF THE CONTENT MYSELF OR IS IT YOU WHO DOES IT?',
        answer: 'We’re happy to integrate the content for you.',
      },
      {
        id: 17,
        isActive: false,
        question: 'IS THERE A FEE FOR HAVING YOU INTEGRATE THE CONTENT?',
        answer:
          'Yes, we charge a development fee for setting up and adding any custom development when creating a dynamic video experience. Please send us as much detail as you can and we’ll get back to you with a quote right away.',
      },
      {
        id: 18,
        isActive: false,
        question: 'DOES IT WORK WITH ALL MOBILE DEVICES?',
        answer:
          'Yes, we output the video as 1080p, 720p, 480p, mp4 files as well as HLS for a mobile optimized experience. These are real videos that get generated so they work on all devices and can be saved and shared on social media.',
      },
      {
        id: 19,
        isActive: false,
        question: 'IS THE VIDEO PLAYED DIRECTLY FROM YOUR SERVERS?',
        answer:
          'Plexus Market is built on Amazon AWS and the videos are hosted on Amazon S3, served over CloudFront CDN for optimal worldwide delivery. These buckets are hosted under our account, but we do allow the option to have them under your own account for security requirements if necessary.',
      },
      {
        id: 20,
        isActive: false,
        question: 'DO YOU OFFER ON-SITE EXPERIENTIAL INSTALLATION SERVICES?',
        answer:
          'We do provide installation services to fit any size event, no matter how complex. We have the ability to capture video of people in front of cameras and incorporate them into personalized trailers and vignettes for view on-site, leaving them with memorable keepsakes from the event. Our experienced teams can provide solutions for shooting on green screens for custom backgrounds and effects that wow audiences when they see themselves integrated into the scene.',
      },
      {
        id: 21,
        isActive: false,
        question: 'CAN YOU PROVIDE PROJECTION MAPPING OUTPUT?',
        answer:
          'We are currently building out our capabilities for projection mapping so we can render and interpret footage to be displayed onto different objects. This is usually a custom solution so please give us a call and we would love to work out the details with you.',
      },
      {
        id: 22,
        isActive: false,
        question: 'DOES YOUR SYSTEM CREATE DYNAMIC PRE-ROLL ADS?',
        answer:
          'Yes, we are currently running dynamic display ads on Facebook and third party publishers using custom audiences and demographic data to shape the creative. Give us a call or email and we’ll help answer any questions you have.',
      },
    ],
  }),
  components: { pHeader },
}
</script>
