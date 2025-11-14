"use client";

import { useState, useCallback, useEffect } from "react";

interface UseSpeechReaderReturn {
	isReading: boolean;
	isLoading: boolean;
	error: string | null;
	readContent: (content: string) => Promise<void>;
	stop: () => void;
	pause: () => void;
	resume: () => void;
	reset: () => void;
	isPaused: boolean;
}

export function useSpeechReader(): UseSpeechReaderReturn {
	const [isReading, setIsReading] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
		null
	);

	// Cleanup khi component unmount
	useEffect(() => {
		return () => {
			if (window.speechSynthesis) {
				window.speechSynthesis.cancel();
			}
		};
	}, []);

	const readContent = useCallback(async (content: string) => {
		try {
			setIsLoading(true);
			setError(null);

			// Kiểm tra hỗ trợ Speech API
			if (!window.speechSynthesis) {
				throw new Error(
					"Trình duyệt của bạn không hỗ trợ tính năng đọc nội dung"
				);
			}

			// Dừng đọc hiện tại nếu có
			window.speechSynthesis.cancel();

			// Gọi API để xử lý nội dung bằng Gemini
			const textToRead = content;

			// Tạo utterance mới
			const newUtterance = new SpeechSynthesisUtterance(textToRead);

			// Cấu hình giọng đọc
			const voices = window.speechSynthesis.getVoices();
			// Tìm giọng tiếng Việt hoặc tiếng Anh
			const vietnameseVoice = voices.find((voice) => voice.lang.includes("vi"));
			const englishVoice = voices.find((voice) => voice.lang.includes("en"));

			if (vietnameseVoice) {
				newUtterance.voice = vietnameseVoice;
			} else if (englishVoice) {
				newUtterance.voice = englishVoice;
			}

			newUtterance.rate = 1.0; // Tốc độ đọc
			newUtterance.pitch = 1.0; // Cao độ
			newUtterance.volume = 1.0; // Âm lượng

			// Event listeners
			newUtterance.onstart = () => {
				setIsReading(true);
				setIsLoading(false);
				setIsPaused(false);
			};

			newUtterance.onend = () => {
				setIsReading(false);
				setIsPaused(false);
			};

			newUtterance.onerror = (event) => {
				// Không hiển thị lỗi nếu chỉ là interrupted (do user chuyển tab hoặc dừng)
				if (event.error !== "interrupted") {
					setError("Đã xảy ra lỗi khi đọc nội dung");
					console.error("Speech error:", event);
				}
				setIsReading(false);
				setIsLoading(false);
			};

			setUtterance(newUtterance);

			// Bắt đầu đọc
			window.speechSynthesis.speak(newUtterance);
		} catch (err: any) {
			setError(err.message || "Đã xảy ra lỗi");
			setIsReading(false);
			setIsLoading(false);
		}
	}, []);

	const stop = useCallback(() => {
		if (window.speechSynthesis) {
			window.speechSynthesis.cancel();
			setIsReading(false);
			setIsPaused(false);
		}
	}, []);

	const pause = useCallback(() => {
		if (window.speechSynthesis && isReading) {
			window.speechSynthesis.pause();
			setIsPaused(true);
		}
	}, [isReading]);

	const resume = useCallback(() => {
		if (window.speechSynthesis && isPaused) {
			window.speechSynthesis.resume();
			setIsPaused(false);
		}
	}, [isPaused]);

	const reset = useCallback(() => {
		if (window.speechSynthesis) {
			window.speechSynthesis.cancel();
		}
		setIsReading(false);
		setIsLoading(false);
		setIsPaused(false);
		setError(null);
		setUtterance(null);
	}, []);

	return {
		isReading,
		isLoading,
		error,
		readContent,
		stop,
		pause,
		resume,
		reset,
		isPaused,
	};
}
