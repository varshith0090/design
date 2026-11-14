import Link from 'next/link';
import { Tool } from '@/data/types';
import FileUploadZone from '@/components/tools/FileUploadZone';
import WriterWizard from '@/components/tools/WriterWizard';
import StarRating from '@/components/tools/StarRating';

interface Props {
  tool: Tool;
  categoryName: string;
  categoryHref: string;
}

export default function ToolPageTemplate({ tool, categoryName, categoryHref }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link href="/" className="hover:text-[#0d8bf0]">Home</Link>
        <span>›</span>
        <Link href={categoryHref} className="hover:text-[#0d8bf0]">{categoryName}</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white">{tool.name}</span>
      </nav>

      {/* Tool Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {tool.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          {tool.description}
        </p>
      </div>

      {/* Tool Interface */}
      <div className="mb-12">
        {tool.type === 'upload' && (
          <FileUploadZone acceptedFormats={tool.acceptedFormats || []} />
        )}
        {tool.type === 'writer' && (
          <WriterWizard toolName={tool.name} />
        )}
        {tool.type === 'converter' && (
          <FileUploadZone acceptedFormats={tool.acceptedFormats || []} />
        )}
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mb-16">
        <StarRating />
      </div>

      {/* How To Section */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          How to Use {tool.name}
        </h2>
        <div className="space-y-6">
          {[
            { step: '1', title: tool.type === 'writer' ? 'Enter your prompt' : 'Upload your file', desc: tool.type === 'writer' ? `Type your topic or content into the ${tool.name} input field.` : `Click "Upload" or drag and drop your file into the upload zone.` },
            { step: '2', title: 'Configure settings', desc: 'Adjust any available settings to customize the output to your needs.' },
            { step: '3', title: 'Download result', desc: 'Click the download button to save your processed file. Files are automatically deleted after 1 hour.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0d8bf0] text-white flex items-center justify-center font-bold text-lg">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            { q: `Is ${tool.name} free to use?`, a: `Yes! ${tool.name} is completely free to use. No registration or credit card required.` },
            { q: 'Are my files secure?', a: 'Absolutely. All uploaded and generated files are automatically deleted from our servers after 1 hour. We never sell or share your data.' },
            { q: 'What file formats are supported?', a: tool.acceptedFormats ? `We support the following formats: ${tool.acceptedFormats.join(', ')}` : 'This tool supports a wide range of input formats. Simply enter your content to get started.' },
          ].map((faq, i) => (
            <div key={i}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
