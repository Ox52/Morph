import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, Check, FileIcon, RefreshCw, Zap } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
      {/*   hero section with background */}

      <div className=" relative overflow-hidden">
        {/*  decorative background */}

        <div className=" absolute top-20 left-1/2 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 pointer-event-none"></div>
        <div className="absolute top-40 right-10 w-36 h-36 bg-primary/10 rounded-full filter blur-xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-primary/5 rounded-full filter blur-2xl pointer-events-none"></div>

        {/* main content */}

        <div className="container max-w-5xl px-4 mx-auto relative z-10 border-b">
          <div className="pb-16 space-y-20">
            {/* Hero section */}

            <div className=" space-y-8 pt-10">
              <div className=" flex justify-center">
                <Badge
                  variant="outline"
                  className="px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/5 shadow-sm"
                >
                  Fast & Free Conversions
                </Badge>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 px-4">
                  Free Unlimited File Converter
                  </h1>
                  <p className="text-center text-muted-foreground text-md md:text-lg px-4 md:px-24 xl:px-44 2xl:px-52">
                  Transform your media files without limits. Convert images,
                  audio, and videos quickly and easily with no file size
                  restrictions, all in your browser

                  </p>
              </div>

              {/* featues cards with Hover effects */}
              <div className="grid grid-cols-1 gap-5 md:gap-6 mt-12 px-4 md:px-0 md:grid-cols-3">
                <div className="flex flex-col items-center p-6 space-y-3 border rounded-xl bg-card/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                <div className="p-3 rounded-full bg-primary/10 shadow-inner">
                <Zap/>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                Lightning Fast
                </h3>
                <p className="text-sm text-center text-muted-foreground">
                Process files instantly in your browser with no uploads
                needed
                </p>
                </div>
                <div className="flex flex-col items-center p-6 space-y-3 border rounded-xl bg-card/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                <div className="p-3 rounded-full bg-primary/10 shadow-inner">
                <Check className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                    Privacy First
                  </h3>
                  <p className="text-sm text-center text-muted-foreground">
                    All conversions happen locally, your files never leave your
                    device
                  </p>
                
                </div>
                <div className="flex flex-col items-center p-6 space-y-3 border rounded-xl bg-card/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                
                <div className="p-3 rounded-full bg-primary/10 shadow-inner">
                <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                    Any Format
                  </h3>
                  <p className="text-sm text-center text-muted-foreground">
                    Images, audio, video, PDFs - plus create PDFs from images
                  </p>
                </div>
              </div>
            </div>

            {/* file Drop section with arrow Indicatorr */}

            <div className="space-y-8 px-4 md:px-0 py-6">
              <div className="text-center space-y-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="p-2 rounded-full bg-primary/5 mb-2">
                  <FileIcon className="w-6 h-6 text-primary"/>
                  </div>
                  <h2 className="text-2xl font-bold">Start Converting Now</h2>
                  <p className="text-muted-foreground mt-2 max-w-md">
                  Convert files between formats or create PDFs from images
                  </p>
                  <div className="mt-4 animate-bounce">
                    <ArrowDown className="w-5 h-5 text-primary"/>
                  </div>
                </div>
              </div>

              {/* Tabs for diffrent converts */}

              <div className="max-w-4xl mx-auto">
                <Tabs defaultValue="convert" className="w-full">

                  <TabsList className="grid w-full grid-cols-2 mb-2">

                    <TabsTrigger value="convert">File Convert</TabsTrigger>
                    <TabsTrigger value="images-to-pdf">Images to PDF</TabsTrigger>
                  </TabsList>
                  <TabsContent value="convert" className="mt-0">
                   
                  </TabsContent>

                  <TabsContent value="images-to-pdf" className="mt-0">
                    
                  </TabsContent>
                </Tabs>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
