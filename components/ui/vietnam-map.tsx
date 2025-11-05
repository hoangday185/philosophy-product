"use client";

import { useMemo } from "react";
import LeafletMap from "./leaflet-map";
import { createMarkersFromAddress } from "@/lib/map-utils";

interface VietnamMapProps {
	provinces?: Array<{
		name: string;
		lat: number;
		lng: number;
		students?: number;
		courses?: number;
		content?: string;
		originalName?: string;
	}>;
	dots?: Array<{
		start: { lat: number; lng: number; label?: string };
		end: { lat: number; lng: number; label?: string };
	}>;
	lineColor?: string;
	onProvinceClick?: (provinceName: string) => void;
	showDotCircles?: boolean;
	useStraightLines?: boolean;
	showIslandLabels?: boolean; // Hiển thị labels tiếng Việt cho các quần đảo
	expandMultiLocationCampaigns?: boolean; // Tự động tạo markers cho chiến dịch nhiều địa điểm
}

export default function VietnamMap({
	provinces = [],
	dots = [],
	lineColor = "#0ea5e9",
	onProvinceClick,
	showDotCircles = true,
	useStraightLines = false,
	showIslandLabels = true,
	expandMultiLocationCampaigns = true,
}: VietnamMapProps) {

	// Tạo expanded markers nếu cần
	const expandedProvinces = useMemo(() => {
		if (!expandMultiLocationCampaigns) {
			return provinces;
		}

		const allMarkers: typeof provinces = [];
		
		for (const province of provinces) {
			if (province.content) {
				// Tạo markers cho chiến dịch nhiều địa điểm
				const markers = createMarkersFromAddress({
					id: province.name,
					name: province.name,
					content: province.content,
					lat: province.lat,
					lng: province.lng,
				});
				
				allMarkers.push(...markers.map(marker => ({
					...province,
					name: marker.name,
					lat: marker.lat,
					lng: marker.lng,
					content: marker.content,
					originalName: marker.originalName,
				})));
			} else {
				// Giữ nguyên marker thông thường
				allMarkers.push(province);
			}
		}
		
		return allMarkers;
	}, [provinces, expandMultiLocationCampaigns]);

	return (
		<div className="w-full h-full">
			<LeafletMap
				provinces={expandedProvinces}
				dots={dots}
				lineColor={lineColor}
				onProvinceClick={onProvinceClick}
				showDotCircles={showDotCircles}
				useStraightLines={useStraightLines}
				showIslandLabels={showIslandLabels}
			/>
		</div>
	);
}
