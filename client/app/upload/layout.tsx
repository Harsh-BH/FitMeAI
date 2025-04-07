"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);
    
    let breadcrumbs = [
      {
        label: 'Home',
        href: '/',
        icon: <Home className="h-4 w-4" />
      }
    ];
    
    let currentPath = '';
    
    paths.forEach(path => {
      currentPath += `/${path}`;
      breadcrumbs.push({
        label: path.charAt(0).toUpperCase() + path.slice(1),
        href: currentPath,
        icon: <></>
      });
    });
    
    return breadcrumbs;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-6">
        <nav className="flex mb-6">
          <ol className="flex items-center space-x-1 text-sm">
            {getBreadcrumbs().map((breadcrumb, index) => (
              <li key={breadcrumb.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
                )}
                <Link 
                  href={breadcrumb.href}
                  className={`flex items-center hover:text-primary transition-colors ${
                    pathname === breadcrumb.href ? 'font-medium text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {breadcrumb.icon && <span className="mr-1">{breadcrumb.icon}</span>}
                  {breadcrumb.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
