import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Dumbbell } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white mb-4">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-extrabold tracking-tight uppercase italic">Iron<span className="text-orange-500">Forge</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Forging elite fitness through dedication, science, and sweat. Join the community that pushes limits and breaks barriers.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Trainers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200">Hypertrophy Training</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200">HIIT & Cardio</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200">Powerlifting</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200">Yoga & Mobility</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors duration-200">Nutrition Coaching</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                <span>123 Iron Street, Muscle District<br />Fitness City, FC 90210</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                <span>join@ironforge.fitness</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-white text-sm font-semibold mb-2">Opening Hours</h4>
              <p className="text-sm">Mon - Fri: 5:00 AM - 11:00 PM</p>
              <p className="text-sm">Sat - Sun: 7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} IronForge Fitness. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
