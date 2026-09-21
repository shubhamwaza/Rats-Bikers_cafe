import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BikersCafe from './components/BikersCafe';
import AppointmentBooking from './components/AppointmentBooking';
import PriorityMembership from './components/PriorityMembership';
import PaymentModal from './components/PaymentModal';
import RidesCalendar from './components/RidesCalendar';
import AccessoriesStore from './components/AccessoriesStore';
import LocationTimings from './components/LocationTimings';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [paymentModalData, setPaymentModalData] = useState({ open: false, tier: null, billingCycle: 'annual' });

  const handleOpenPayment = (tier, billingCycle = 'annual') => {
    setPaymentModalData({ open: true, tier, billingCycle });
  };

  const handleClosePayment = () => {
    setPaymentModalData({ open: false, tier: null, billingCycle: 'annual' });
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-slate-100 flex flex-col font-sans selection:bg-[#FF5500] selection:text-white">
      
      {/* Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenBooking={() => setActiveTab('booking')}
        onOpenMembership={() => setActiveTab('membership')}
      />

      {/* Main Active Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <Home 
            setActiveTab={setActiveTab}
            onOpenBooking={() => setActiveTab('booking')}
            onOpenMembership={() => setActiveTab('membership')}
          />
        )}

        {activeTab === 'cafe' && <BikersCafe />}

        {activeTab === 'booking' && <AppointmentBooking />}

        {activeTab === 'membership' && (
          <PriorityMembership 
            onOpenPayment={handleOpenPayment} 
          />
        )}

        {activeTab === 'rides' && <RidesCalendar />}

        {activeTab === 'store' && <AccessoriesStore />}

        {activeTab === 'location' && <LocationTimings />}
      </main>

      {/* Payment Gateway Modal */}
      {paymentModalData.open && (
        <PaymentModal 
          tier={paymentModalData.tier}
          billingCycle={paymentModalData.billingCycle}
          onClose={handleClosePayment}
        />
      )}

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab}
        onOpenBooking={() => setActiveTab('booking')}
        onOpenMembership={() => setActiveTab('membership')}
      />

    </div>
  );
}
