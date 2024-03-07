"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type Props = {
  title: string;
  shareUrl: string;
};
const SocialShare = ({ title, shareUrl }: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Share
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="flex">
            <DropdownMenuItem>
              <FacebookShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <TelegramShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default SocialShare;
