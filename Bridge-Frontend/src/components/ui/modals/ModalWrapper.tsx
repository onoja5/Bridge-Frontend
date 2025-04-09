import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../dialog";

const ModalWrapper = ({
  id,
  icon,
  title,
  subtitle,
  titleClass,
  subtitleClass,
  children,
  openModals,
  headerClass,
  modalAction,
}: {
  subtitleClass: string;
  titleClass: string;
  headerClass: string;
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  children: ReactNode;
  openModals: { [key: string]: boolean };
  modalAction: (id: string) => void;
}) => {
  return (
    <div>
      <Dialog
        open={openModals[id]}
        onOpenChange={(isOpen) => !isOpen && modalAction(id)}
      >
        <DialogContent className="space-y-6 bg-white sm:max-w-[402px]">
          {icon}

          <DialogHeader className={headerClass}>
            <DialogTitle className={titleClass}>{title}</DialogTitle>
            <DialogDescription className={subtitleClass}>
              {subtitle}
            </DialogDescription>
          </DialogHeader>

          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalWrapper;
