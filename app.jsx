const { useMemo, useState } = React;

const Icon = ({ path, size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {path}
    </svg>
);

const Icons = {
    Sparkles: <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z M5 3v4 M9 5H3 M5 21v-4 M9 19H3" />,
    Brain: <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />,
    ChevronDown: <path d="m6 9 6 6 6-6" />,
    ChevronUp: <path d="m18 15-6-6-6 6" />,
    Copy: <><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></>,
    Check: <polyline points="20 6 9 17 4 12" />,
    Wand: <><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" /><path d="m14 7 3 3" /><path d="M5 6v4" /><path d="M9 8H1" /><path d="m5 16-3 3" /><path d="m2 16 3 3" /></>,
    Settings: <><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></>,
    Image: <><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></>,
    Lock: <><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    Flask: <path d="M8.5 2h7M10 2v7.5l-4 8.5h12l-4-8.5V2" />,
    Mic: <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />,
    MicOff: <><line x1="1" y1="1" x2="23" y2="23" /><path d="M9 9v3a3 3 0 0 0 5.12 2.12" /><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" /><path d="M9 9v3a3 3 0 0 0 5.12 2.12" /><path d="M12 19v3" /><path d="M8 22h8" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></>,
    Menu: <><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></>,
    X: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>
};

const PROVIDERS = [
    {
        id: 'google',
        name: 'Google',
        color: 'text-blue-400',
        border: 'border-blue-500',
        bg: 'bg-blue-500/10',
        models: [
            { id: 'gemini-3-pro', name: 'Gemini 3 Pro', tags: ['Latest', 'Multimodal'], format: 'TOON_V4' },
            { id: 'gemini-nano-banana', name: 'Nano Banana Pro', tags: ['Image Gen', 'On-Device'], format: 'TOON_IMAGE' },
            { id: 'imagen-4', name: 'Imagen 4', tags: ['Image Generation'], format: 'IMAGE_PARAMS' },
            { id: 'veo-3-1', name: 'Veo 3.1', tags: ['Video', 'Cinematic'], format: 'VIDEO_SCRIPT' }
        ]
    },
    {
        id: 'openai',
        name: 'OpenAI',
        color: 'text-green-400',
        border: 'border-green-500',
        bg: 'bg-green-500/10',
        models: [
            { id: 'gpt-5-2-pro', name: 'GPT-5.2 Pro', tags: ['Reasoning', 'Text'], format: 'MARKDOWN_ADV' },
            { id: 'dalle-3', name: 'DALL-E 3', tags: ['Image'], format: 'DALLE_PROMPT' }
        ]
    },
    {
        id: 'anthropic',
        name: 'Anthropic',
        color: 'text-orange-400',
        border: 'border-orange-500',
        bg: 'bg-orange-500/10',
        models: [
            { id: 'claude-4-5-opus', name: 'Claude 4.5 Opus', tags: ['Coding', 'Reasoning'], format: 'XML_THINKING' },
            { id: 'claude-4-5-sonnet', name: 'Claude 4.5 Sonnet', tags: ['Balanced'], format: 'XML_TAGS' }
        ]
    },
    {
        id: 'meta',
        name: 'Meta',
        color: 'text-indigo-400',
        border: 'border-indigo-500',
        bg: 'bg-indigo-500/10',
        models: [
            { id: 'llama-4-behemoth', name: 'Llama 4 Behemoth', tags: ['Multimodal'], format: 'LLAMA_GUARD' }
        ]
    },
    {
        id: 'deepseek',
        name: 'DeepSeek',
        color: 'text-purple-400',
        border: 'border-purple-500',
        bg: 'bg-purple-500/10',
        models: [
            { id: 'deepseek-v3-2-speciale', name: 'DeepSeek V3.2 Speciale', tags: ['Adv Reasoning', 'Math'], format: 'SYSTEM_INSTRUCT' },
            { id: 'janus-pro', name: 'Janus-Pro', tags: ['Image/Multimodal'], format: 'IMAGE_PARAMS' }
        ]
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        color: 'text-cyan-400',
        border: 'border-cyan-500',
        bg: 'bg-cyan-500/10',
        models: [
            { id: 'sonar-deep-research', name: 'Sonar Deep Research', tags: ['Deep Search'], format: 'RESEARCH_QUERY' },
            { id: 'sonar-reasoning-pro', name: 'Sonar Reasoning Pro', tags: ['Logic + Search'], format: 'CHAIN_OF_THOUGHT' }
        ]
    },
    {
        id: 'github',
        name: 'GitHub Copilot',
        color: 'text-gray-200',
        border: 'border-gray-400',
        bg: 'bg-gray-500/10',
        models: [
            { id: 'copilot-claude-4-5', name: 'Copilot (Claude 4.5)', tags: ['Coding'], format: 'XML_THINKING' },
            { id: 'copilot-gpt-5-2', name: 'Copilot (GPT-5.2)', tags: ['Coding'], format: 'MARKDOWN_ADV' },
            { id: 'copilot-gemini-3', name: 'Copilot (Gemini 3)', tags: ['Coding'], format: 'TOON_V4' }
        ]
    }
];

const createGptsPayload = ({ intent, answers, model }) => {
    const starters = [
        'Turn my idea into a detailed prompt.',
        'Ask me 3 clarifying questions first.',
        'Optimize this for a multimodal model.'
    ];

    return {
        name: `Alchemy Prime | ${model.name}`,
        description: 'A high-performance prompt generator optimized for GPTs and GPT Apps.',
        instructions: `You are ALCHEMY PRIME. Generate a prompt using format ${model.format}. Translate Persian to professional English. Ask clarifying questions when critical details are missing. Intent: ${intent}. Details: ${answers || 'N/A'}.`,
        conversation_starters: starters
    };
};

const detectVisual = (model) => model.tags.some((t) => t.includes('Image') || t.includes('Video') || model.format.includes('IMAGE'));

const App = () => {
    const [selectedProvider, setSelectedProvider] = useState(PROVIDERS[0]);
    const [selectedModel, setSelectedModel] = useState(PROVIDERS[0].models[0]);
    const [intent, setIntent] = useState('');
    const [answers, setAnswers] = useState('');
    const [output, setOutput] = useState('');
    const [isInteractive, setIsInteractive] = useState(false);
    const [consistencyMode, setConsistencyMode] = useState(false);
    const [reasoningLevel, setReasoningLevel] = useState(70);
    const [isGenerating, setIsGenerating] = useState(false);
    const [copied, setCopied] = useState(false);
    const [refinementStep, setRefinementStep] = useState('IDLE');
    const [questions, setQuestions] = useState([]);
    const [isListening, setIsListening] = useState(false);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [outputMode, setOutputMode] = useState('PROMPT');

    const apiKey = '';

    const callGeminiAPI = async (prompt) => {
        if (!apiKey) return null;
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
        const payload = { contents: [{ parts: [{ text: prompt }] }] };

        const delays = [1000, 2000, 4000];
        for (let i = 0; i <= delays.length; i += 1) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) throw new Error(`API Error: ${response.status}`);
                const data = await response.json();
                return data.candidates?.[0]?.content?.parts?.[0]?.text;
            } catch (error) {
                if (i === delays.length) {
                    console.error('API Fail', error);
                    return null;
                }
                await new Promise((resolve) => setTimeout(resolve, delays[i]));
            }
        }
        return null;
    };

    const generateDeepQuestionsStatic = (text, model) => {
        if (detectVisual(model)) {
            return ['سبک هنری و نورپردازی دقیق؟', 'نسبت تصویر (Aspect Ratio) و ابعاد؟', 'جزئیات صحنه و محیط؟'];
        }
        return ['هدف نهایی و مخاطب؟', 'لحن و ساختار خروجی؟', 'محدودیت\u200cهای فنی خاص؟'];
    };

    const generateDeepQuestionsAI = async (text, model) => {
        const prompt = `
You are an Expert Prompt Engineer. The user wants to generate a prompt for the AI model "${model.name}" (Format: ${model.format}).
User's Intent: "${text}"
Identify 3 CRITICAL missing technical details.
Rules: If Image/Video model, ask about ASPECT RATIO, LIGHTING, CAMERA. If Code, ask about STACK, OPTIMIZATION.
Output ONLY raw JSON array of 3 strings in PERSIAN. Example: ["سوال1?", "سوال2?", "سوال3?"]
        `;
        const result = await callGeminiAPI(prompt);
        if (result) {
            try {
                return JSON.parse(result.replace(/```json|```/g, '').trim());
            } catch (error) {
                return generateDeepQuestionsStatic(text, model);
            }
        }
        return generateDeepQuestionsStatic(text, model);
    };

    const generateFinalPromptStatic = () => {
        const title = outputMode === 'GPTS' ? '[OFFLINE GPTS TEMPLATE]' : '[OFFLINE MODE]';
        const gptsPayload = createGptsPayload({ intent, answers, model: selectedModel });
        const fallback = `${title}\n\nAlchemy Prime requires connection for AI translation.\n\nRaw Intent:\n${intent}\n\nGPTs Payload:\n${JSON.stringify(gptsPayload, null, 2)}`;
        setOutput(fallback);
        setRefinementStep('IDLE');
        setIsGenerating(false);
    };

    const generateFinalPromptAI = async () => {
        setIsGenerating(true);
        setOutput('');
        setQuestions([]);

        const systemPrompt = `
You are ALCHEMY PRIME, a world-class prompt engineering engine.
Target: ${selectedModel.name} | Format: ${selectedModel.format} | Level: ${reasoningLevel}%
Context Mode: ${consistencyMode ? 'Consistency Locked' : 'One-Shot'}
Intent (Persian): "${intent}"
Details (Persian): "${answers}"

*** MANDATE: TRANSLATE EVERYTHING TO PROFESSIONAL ENGLISH ***
The user input is Persian, but the prompt MUST be in English.

RULES:
1. Use format: ${selectedModel.format} (TOON, XML, etc).
2. Add engineering boosters.
3. If Image/Video, define Ratio, Light, Camera.
4. Output ONLY the code/prompt block.
        `;

        const aiResponse = await callGeminiAPI(systemPrompt);
        if (aiResponse) {
            if (outputMode === 'GPTS') {
                const gptsPayload = createGptsPayload({ intent, answers, model: selectedModel });
                gptsPayload.instructions += `\n\nGenerated Prompt:\n${aiResponse.trim()}`;
                setOutput(JSON.stringify(gptsPayload, null, 2));
            } else {
                setOutput(aiResponse);
            }
            setRefinementStep('IDLE');
            setIsGenerating(false);
        } else {
            generateFinalPromptStatic();
        }
    };

    const enhanceIntent = async () => {
        if (!intent.trim()) return;
        setIsEnhancing(true);
        const result = await callGeminiAPI(`Expand this Persian intent for AI prompt usage: "${intent}". Keep it concise.`);
        if (result) setIntent(result.trim());
        setIsEnhancing(false);
    };

    const handleAction = async () => {
        if (!intent.trim()) return;
        if (isInteractive && refinementStep === 'IDLE') {
            setIsGenerating(true);
            setOutput('');
            const qs = await generateDeepQuestionsAI(intent, selectedModel);
            setQuestions(qs);
            setRefinementStep('ASKING');
            setIsGenerating(false);
            return;
        }
        if (refinementStep === 'ASKING') setAnswers(intent);
        generateFinalPromptAI();
    };

    const toggleListening = () => {
        if (!('webkitSpeechRecognition' in window)) {
        alert('مرورگر پشتیبانی نمی\u200cکند');
            return;
        }
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'fa-IR';
        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event) => setIntent((prev) => `${prev} ${event.results[0][0].transcript}`);
        recognition.start();
    };

    const handleCopy = () => {
        if (!output) return;
        const el = document.createElement('textarea');
        el.value = output;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const outputLabel = useMemo(() => {
        if (outputMode === 'GPTS') return 'GPTs / GPT Apps JSON';
        return selectedModel.format;
    }, [outputMode, selectedModel]);

    return (
        <div className="flex flex-col h-screen overflow-hidden selection:bg-blue-500/30 font-sans text-right">
            <header className="h-16 border-b border-white/5 bg-[#0a0a0c]/90 backdrop-blur flex items-center justify-between px-4 md:px-6 z-20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Icon path={Icons.Flask} className="text-white" size={18} />
                    </div>
                    <div>
                        <h1 className="font-black text-base md:text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            ALCHEMY <span className="text-blue-500">PRIME</span>
                        </h1>
                        <span className="text-[9px] md:text-[10px] text-gray-500 font-mono tracking-widest">v9.0 MOBILE</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-emerald-500 hidden md:block">READY</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10"
                    >
                        <Icon path={mobileMenuOpen ? Icons.X : Icons.Menu} size={20} />
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden relative">
                {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>
                )}

                <aside className={`fixed inset-y-0 right-0 z-30 w-72 bg-[#0c0c0e]/95 backdrop-blur-xl border-l border-white/5 flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4 border-b border-white/5 flex justify-between items-center md:block">
                        <h2 className="text-xs font-bold text-gray-400 mb-0 md:mb-3 flex items-center gap-2">
                            <Icon path={Icons.Settings} size={12} /> مدل\u200cها
                        </h2>
                        <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-gray-500">
                            <Icon path={Icons.X} size={16} />
                        </button>
                    </div>
                    <div className="p-4 pt-2 overflow-y-auto flex-1 custom-scrollbar">
                        <div className="space-y-1 mb-4">
                            {PROVIDERS.map((provider) => (
                                <div key={provider.id} className="rounded-lg border border-white/5 bg-white/[0.02]">
                                    <button
                                        onClick={() => setSelectedProvider(selectedProvider?.id === provider.id ? null : provider)}
                                        className={`w-full flex items-center justify-between p-3 text-xs font-bold transition-all ${selectedProvider?.id === provider.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                                    >
                                        <span>{provider.name}</span>
                                        <Icon path={selectedProvider?.id === provider.id ? Icons.ChevronUp : Icons.ChevronDown} size={12} />
                                    </button>
                                    {selectedProvider?.id === provider.id && (
                                        <div className="bg-black/20 p-1 space-y-1">
                                            {provider.models.map((model) => (
                                                <button
                                                    key={model.id}
                                                    onClick={() => {
                                                        setSelectedModel(model);
                                                        setMobileMenuOpen(false);
                                                    }}
                                                    className={`w-full text-right text-[11px] p-2 rounded flex justify-between items-center ${selectedModel.id === model.id ? 'bg-blue-600/20 text-blue-200 border border-blue-500/20' : 'text-gray-500 hover:bg-white/5'}`}
                                                >
                                                    <span>{model.name}</span>
                                                    {model.tags.some((t) => t.includes('Image')) && <Icon path={Icons.Image} size={10} />}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/5">
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] text-gray-400">
                                    <span>پیچیدگی (Complexity)</span>
                                    <span className="text-blue-400">{reasoningLevel}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={reasoningLevel}
                                    onChange={(event) => setReasoningLevel(event.target.value)}
                                    className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                            </div>

                            <button
                                onClick={() => setIsInteractive(!isInteractive)}
                                className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${isInteractive ? 'bg-purple-500/10 border-purple-500/40' : 'bg-white/5 border-white/5'}`}
                            >
                                <div className="flex items-center gap-2">
                                    <div className={`p-1.5 rounded ${isInteractive ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
                                        <Icon path={Icons.Brain} size={14} />
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-[11px] font-bold ${isInteractive ? 'text-purple-200' : 'text-gray-300'}`}>AI Refinement</div>
                                    </div>
                                </div>
                                <div className={`w-8 h-4 rounded-full p-0.5 flex ${isInteractive ? 'bg-purple-500 justify-start' : 'bg-gray-700 justify-end'}`}>
                                    <div className="w-3 h-3 rounded-full bg-white"></div>
                                </div>
                            </button>

                            <button
                                onClick={() => setConsistencyMode(!consistencyMode)}
                                className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${consistencyMode ? 'bg-pink-500/10 border-pink-500/40' : 'bg-white/5 border-white/5'}`}
                            >
                                <div className="flex items-center gap-2">
                                    <div className={`p-1.5 rounded ${consistencyMode ? 'bg-pink-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
                                        <Icon path={Icons.Lock} size={14} />
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-[11px] font-bold ${consistencyMode ? 'text-pink-200' : 'text-gray-300'}`}>Consistency Lock</div>
                                    </div>
                                </div>
                                <div className={`w-4 h-4 rounded border flex items-center justify-center ${consistencyMode ? 'bg-pink-500 border-pink-500' : 'border-gray-600'}`}>
                                    {consistencyMode && <Icon path={Icons.Check} size={10} className="text-white" />}
                                </div>
                            </button>

                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] text-gray-400">
                                    <span>حالت خروجی</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setOutputMode('PROMPT')}
                                        className={`flex-1 p-2 rounded-lg text-[11px] font-bold border ${outputMode === 'PROMPT' ? 'bg-blue-600/20 text-blue-200 border-blue-500/40' : 'bg-white/5 text-gray-400 border-white/10'}`}
                                    >
                                        Prompt
                                    </button>
                                    <button
                                        onClick={() => setOutputMode('GPTS')}
                                        className={`flex-1 p-2 rounded-lg text-[11px] font-bold border ${outputMode === 'GPTS' ? 'bg-emerald-600/20 text-emerald-200 border-emerald-500/40' : 'bg-white/5 text-gray-400 border-white/10'}`}
                                    >
                                        GPTs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="flex-1 flex flex-col min-w-0 z-10 bg-[#050505]">
                    <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-y-auto">
                        <div className={`glass-panel rounded-2xl p-1 transition-all duration-500 relative group ${refinementStep === 'ASKING' ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.1)]' : 'border-blue-500/20'}`}>
                            <textarea
                                value={intent}
                                onChange={(event) => setIntent(event.target.value)}
                                placeholder={refinementStep === 'ASKING' ? '>> پاسخ\u200cهای خود را اینجا وارد کنید...' : 'نیت خود را بنویسید (مثلاً: عکس سایبرپانک در نانوبنانا)...'}
                                className="w-full h-40 md:h-48 bg-transparent text-white p-4 md:p-6 resize-none focus:outline-none placeholder-gray-600 leading-relaxed text-base md:text-lg font-light glass-input rounded-xl"
                            ></textarea>

                            <div className="absolute top-3 left-3 md:top-4 md:left-4">
                                <button
                                    onClick={enhanceIntent}
                                    disabled={isEnhancing || !intent.trim()}
                                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-[10px] md:text-xs border border-blue-500/20 transition-all"
                                >
                                    {isEnhancing ? <span className="animate-spin">✨</span> : <span>✨</span>}
                                    Expand
                                </button>
                            </div>

                            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex gap-2">
                                <button onClick={toggleListening} className={`p-2 md:p-2.5 rounded-xl border ${isListening ? 'bg-red-500/20 border-red-500 text-red-500 mic-active' : 'bg-white/5 border-white/5 text-gray-400'}`}>
                                    <Icon path={isListening ? Icons.Mic : Icons.MicOff} size={18} />
                                </button>
                                <button
                                    onClick={handleAction}
                                    disabled={isGenerating || !intent.trim()}
                                    className={`px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 shadow-lg transition-all ${refinementStep === 'ASKING' ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                                >
                                    {isGenerating ? <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full"></span> : <Icon path={Icons.Wand} size={18} />}
                                    <span>{refinementStep === 'ASKING' ? 'Finalize' : 'Transmute'}</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 glass-panel rounded-2xl flex flex-col overflow-hidden border-white/10 min-h-[300px]">
                            <div className="p-3 bg-black/40 border-b border-white/5 flex justify-between items-center">
                                <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-gray-400">
                                    <span>OUTPUT:</span>
                                    <span className="text-blue-400 font-bold truncate max-w-[150px] md:max-w-none">{outputLabel}</span>
                                </div>
                                {output && refinementStep === 'IDLE' && (
                                    <button onClick={handleCopy} className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs text-gray-300 transition-colors">
                                        {copied ? <Icon path={Icons.Check} size={14} className="text-green-400" /> : <Icon path={Icons.Copy} size={14} />}
                                        <span>Copy</span>
                                    </button>
                                )}
                            </div>
                            <div className="flex-1 p-4 md:p-6 overflow-auto bg-[#08080a] relative custom-scrollbar">
                                {refinementStep === 'ASKING' ? (
                                    <div className="animate-in fade-in-up space-y-4">
                                        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200">
                                            <h3 className="font-bold mb-3 flex gap-2 text-sm md:text-base">
                                                <Icon path={Icons.Brain} /> سوالات مهندسی (AI):
                                            </h3>
                                            <ul className="list-decimal list-inside space-y-2 text-xs md:text-sm opacity-90 dir-rtl">
                                                {questions.map((q, i) => <li key={i}>{q}</li>)}
                                            </ul>
                                        </div>
                                        <p className="text-xs text-gray-500 text-center">پاسخ\u200cها را در باکس بالا بنویسید و دکمه Finalize را بزنید.</p>
                                    </div>
                                ) : (
                                    <pre className="font-mono text-xs md:text-sm leading-loose text-gray-300 dir-ltr whitespace-pre-wrap">
                                        {output || <span className="opacity-30">Ready to engineer prompt...</span>}
                                    </pre>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
