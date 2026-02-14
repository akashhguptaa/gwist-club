"use client";

// No need for useRouter in app directory
import eventsData from "../../data/events.json";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const event = (eventsData.events || []).find((e: any) => String(e.id) === resolvedParams.id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#f5f1eb]">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-lg text-gray-600">Sorry, we couldn't find the event you're looking for.</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Use /events/filename.jpg if images are in public/events, else adjust as needed
  let imageSrc = event.imagePath;
  // For local images in public/, just use /{imagePath}
  if (imageSrc && !imageSrc.startsWith("http") && !imageSrc.startsWith("/")) {
    imageSrc = `/${imageSrc}`;
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb] flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-16">
        <button
          onClick={() => window.history.back()}
          className="mb-6 px-4 py-2 bg-[#0d6d6e] text-white rounded-lg font-semibold hover:bg-[#09494a] transition-colors"
        >
          ← Back
        </button>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <img
            src={imageSrc}
            alt={event.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E3538] mb-4">
            {event.title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{event.description}</p>
          {event.detailPage && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-[#0d6d6e] mb-2">Overview</h2>
                <p className="text-gray-800 mb-4">{event.detailPage.overview}</p>
                {event.detailPage.highlights && (
                  <>
                    <h3 className="text-xl font-semibold text-[#2E3538] mb-2">Highlights</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                      {event.detailPage.highlights.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <div className="flex flex-wrap gap-6 mt-4">
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">Team</span>
                    <span className="font-semibold text-gray-900">{event.detailPage.team}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-1">Status</span>
                    <span className="font-semibold text-gray-900">{event.detailPage.status}</span>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Timeline and location removed as requested */}
          {/* Register button removed as requested */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
