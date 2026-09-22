import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Users, 
  Clock, 
  CheckCircle2
} from 'lucide-react';

export default function RidesCalendar() {
  const [filter, setFilter] = useState('all');
  const [rsvpList, setRsvpList] = useState({});

  const rides = [
    {
      id: 'ride-1',
      title: 'Sunrise Twisties to Nandi Hills',
      type: 'breakfast',
      date: 'Saturday, Oct 3, 2026',
      time: '05:00 AM Assembly',
      distance: '65 KM (Round Trip)',
      difficulty: 'Easy / Beginner Friendly',
      diffColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      startPoint: 'R.A.T.S Cafe, Indiranagar',
      captain: 'Captain Vikram "Viper" Singh',
      attendees: 42,
      desc: 'Our iconic early morning breakfast run. Smooth twisties, fresh misty mountain weather, and complimentary filter coffee for squad riders.'
    },
    {
      id: 'ride-2',
      title: 'Night Patrol Highway Express',
      type: 'night',
      date: 'Friday, Oct 9, 2026',
      time: '09:30 PM Assembly',
      distance: '120 KM',
      difficulty: 'Intermediate',
      diffColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      startPoint: 'Hebbal Flyover Junction',
      captain: 'Rider Sara "Apex" Khan',
      attendees: 28,
      desc: 'Midnight highway cruising down the 6-lane express highway. High focus, strict staggered formation riding.'
    },
    {
      id: 'ride-3',
      title: 'Western Ghats 3-Day Expedition',
      type: 'expedition',
      date: 'Fri, Oct 23 - Sun, Oct 25, 2026',
      time: '04:30 AM Departure',
      distance: '850 KM (3 Days)',
      difficulty: 'Hardcore Touring',
      diffColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
      startPoint: 'R.A.T.S Clubhouse',
      captain: 'Founder Dev "RoadKing" Sharma',
      attendees: 16,
      desc: 'Multi-state coastal and ghat mountain pass expedition. Covers Chikmagalur, Sakleshpur & Western Ghat reserves.'
    }
  ];

  const handleRsvp = (id) => {
    setRsvpList(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredRides = filter === 'all' 
    ? rides 
    : rides.filter(r => r.type === filter);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 min-h-screen">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 text-xs font-mono text-orange-400">
          <CalendarIcon className="w-4 h-4 text-orange-400" />
          <span>Squad Highway Calendar</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Upcoming <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">Cafe Rides & Expeditions</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Joining our squad rides is completely free for all motorcycle owners. Check out the upcoming scheduled runs and RSVP below to lock your slot!
        </p>

        {/* Filter Pills */}
        <div className="pt-4 flex justify-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/10 w-fit mx-auto backdrop-blur-md">
          {['all', 'breakfast', 'night', 'expedition'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-medium capitalize transition-all active:scale-95 ${
                filter === f
                  ? 'apple-btn-primary'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {f === 'all' ? 'All Rides' : `${f} Runs`}
            </button>
          ))}
        </div>
      </div>

      {/* Rides List */}
      <div className="space-y-6">
        {filteredRides.map((ride) => {
          const isRsvped = rsvpList[ride.id];
          const count = isRsvped ? ride.attendees + 1 : ride.attendees;

          return (
            <div
              key={ride.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${ride.diffColor}`}>
                    {ride.difficulty}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{ride.distance}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white">{ride.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{ride.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-2 font-mono">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-orange-400" />
                    <span>{ride.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span>{ride.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span>{ride.startPoint}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 space-y-4">
                <div className="text-left lg:text-right">
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Ride Lead</p>
                  <p className="text-xs font-bold text-white">{ride.captain}</p>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-1">
                    <Users className="w-3.5 h-3.5" />
                    <span className="font-semibold font-mono">{count} Riders Registered</span>
                  </div>
                </div>

                <button
                  onClick={() => handleRsvp(ride.id)}
                  className={`w-full lg:w-auto px-6 py-3 rounded-full font-semibold text-xs transition-all flex items-center justify-center gap-2 active:scale-95 ${
                    isRsvped
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'apple-btn-primary'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isRsvped ? 'RSVP Confirmed!' : '1-Click RSVP'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

