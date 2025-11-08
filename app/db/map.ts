export type Resistance = {
	id: string;
	name: string;
	description: string;
	address: {
		id: string;
		name: string;
		content: string;
		lat: number;
		lng: number;
	}[];
};

const MAP_DATA: Array<Resistance> = [
	{
		id: "cuoc-khang-chien-chong-phap",
		name: "Cuộc kháng chiến chống Pháp",
		description:
			"Cuộc kháng chiến chống Pháp là cuộc kháng chiến của dân tộc Việt Nam chống lại thực dân Pháp trong thời kỳ 1945-1954.",
		address: [
			{
				id: "sai-gon",
				name: "Sài Gòn",
				content: `Nam Bộ kháng chiến (Sài Gòn, 23/9/1945): Rạng sáng 23/9/1945, được quân Anh hậu thuẫn, thực dân Pháp bất ngờ nổ súng chiếm đóng Sài Gòn, mở đầu cuộc chiến tranh xâm lược lần thứ hai. Lực lượng ta tại chỗ (Tự vệ và các đơn vị Nam Bộ) với vũ khí thô sơ đã anh dũng chống trả, tiêu hao một bộ phận sinh lực địch và giam chân chúng trong thành phố suốt nhiều tuần lễ. Tuy địch tái chiếm được Sài Gòn, cuộc kháng chiến Nam Bộ đã hoàn thành nhiệm vụ kìm giữ địch ở đô thị, tạo điều kiện cho cả nước có thêm thời gian chuẩn bị kháng chiến lâu dài. Kết quả: Quân dân Nam Bộ tiêu diệt nhiều địch trong thành phố, buộc Pháp phải dàn quân đối phó trên diện rộng; ta rút về lập chiến khu, mở đầu cuộc kháng chiến trường kỳ. Ý nghĩa: Ngày Nam Bộ kháng chiến đã trở thành mốc son mở đầu cho tinh thần "Thành đồng Tổ quốc" – toàn dân Nam Bộ kiên quyết đứng lên bảo vệ độc lập. Thắng lợi bước đầu này cổ vũ mạnh mẽ quân dân cả nước bước vào Toàn quốc kháng chiến sau đó.`,
				lat: 10.8231,
				lng: 106.6297, // Trung tâm TP.HCM (chính xác hơn)
			},
			{
				id: "ha-noi",
				name: "Hà Nội",
				content: `Trận Hà Nội (Hà Nội, 19/12/1946 – 17/2/1947): Đêm 19/12/1946, thực hiện Lời kêu gọi Toàn quốc kháng chiến, quân dân Hà Nội (khoảng 2.500 Vệ quốc quân và 8.000 tự vệ) đồng loạt nổ súng tấn công quân Pháp (khoảng 6.500 lính chính quy, có xe tăng, pháo binh và không quân yểm trợ). Lực lượng Trung đoàn Thủ đô với vũ khí thô sơ đã chiến đấu ngoan cường trong 60 ngày đêm khói lửa ở từng góc phố, ngôi nhà, giam chân và tiêu hao sinh lực địch. Đến ngày 17/2/1947, ta chủ động rút quân an toàn lên Việt Bắc sau khi đã phá kế hoạch “đánh nhanh chiếm gọn” của địch ở Hà Nội. Kết quả: Ta loại khỏi vòng chiến hàng trăm địch, bảo toàn lực lượng rút về căn cứ; địch chiếm được Hà Nội nhưng bị tổn thất nặng và lỡ thời cơ. Ý nghĩa: Cuộc chiến đấu 60 ngày đêm ở Hà Nội đã mở đầu cho toàn quốc kháng chiến vô cùng oanh liệt, khẳng định đường lối chiến tranh nhân dân đúng đắn. Quân dân Thủ đô đã kìm chân địch, bảo vệ an toàn cơ quan đầu não kháng chiến rút lên chiến khu, cổ vũ tinh thần quyết tâm “Quyết tử để Tổ quốc quyết sinh” trên cả nước.`,
				lat: 21.0285,
				lng: 105.8542, // Hồ Hoàn Kiếm, Hà Nội
			},
			{
				id: "hai-phong",
				name: "Hải Phòng",
				content: `Sự kiện Hải Phòng (20/12/1946–05/02/1947): Trước khi nổ ra toàn quốc kháng chiến, quân Pháp gây xung đột nghiêm trọng tại Hải Phòng. Ngày 20/11/1946, quân Pháp chiếm tàu và nổ súng khiêu khích, Việt Minh chống trả quyết liệt. Sau cuộc ngừng bắn ngắn, Pháp gửi tối hậu thư đòi ta rút khỏi Hải Phòng. Ngày 23/11/1946, khi ta bác bỏ yêu sách, địch huy động xe tăng, pháo binh hạm tàu bắn phá dữ dội Hải Phòng, tàn sát thường dân hòng "dạy cho Việt Minh một bài học". Kết quả: Thành phố Hải Phòng bị địch chiếm; khoảng 6.000 thường dân Việt Nam thương vong (theo phía Pháp thừa nhận), thậm chí phía ta ước tính lên đến 2 vạn người chết và bị thương. Ý nghĩa: Cuộc thảm sát Hải Phòng cho thấy rõ dã tâm xâm lược của thực dân Pháp, là hồi chuông báo hiệu không thể tránh khỏi của chiến tranh. Tinh thần quyết tử của quân dân Hải Phòng cùng Hà Nội đã góp phần hun đúc ý chí toàn dân bước vào kháng chiến.`,
				lat: 20.8449,
				lng: 106.6881, // Trung tâm Hải Phòng (đúng)
			},
			{
				id: "thua-thien-hue",
				name: "Thừa Thiên Huế",
				content: `Mặt trận Huế (Thừa Thiên Huế, 20/12/1946 – 5/2/1947): Song song với Hà Nội, quân dân cố đô Huế cũng nổ súng kháng chiến từ đêm 20/12/1946, bao vây quân Pháp cố thủ trong thành phố. Lực lượng ta (Trung đoàn Trần Cao Vân và du kích địa phương) đã vây hãm địch suốt 50 ngày đêm trong Thành Nội Huế. Pháp tăng viện 3.000 quân tinh nhuệ cùng pháo binh, máy bay để phản kích. Ngày 5–6/2/1947, trước sức tấn công ồ ạt của địch, mặt trận Huế vỡ chuyến, ta rút lực lượng ra ngoại vi. Tuy thất thủ Huế, nhưng quân dân Thừa Thiên đã tiêu diệt khoảng 250 địch, bắn hỏng nhiều xe cơ giới, thu nhiều vũ khí, khiến Pháp hai lần phải thả dù tiếp viện lương thực, đạn dược cho quân ở Huế. Kết quả: Pháp chiếm được Huế nhưng bị tiêu hao nặng; ta bảo toàn lực lượng rút về chiến khu, duy trì kháng chiến ở Bình-Trị-Thiên. Ý nghĩa: Cuộc bao vây 50 ngày đêm tại Huế thể hiện tinh thần quyết chiến toàn dân ở đô thị miền Trung, “viết nên những trang sử hào hùng về lòng dũng cảm, chí khí kiên cường” của quân dân cố đô trong buổi đầu kháng Pháp. Thắng lợi bước đầu này góp phần phá sản kế hoạch “đánh nhanh thắng nhanh” của địch trên toàn quốc.`,
				lat: 16.4637,
				lng: 107.5909, // Thành Nội Huế
			},
			{
				id: "chien-dich-viet-bac-thu-dong",
				name: "Chiến dịch Việt Bắc thu đông",
				content: `Chiến dịch Việt Bắc (Bắc Kạn – Tuyên Quang – Thái Nguyên, 7/10 – 22/12/1947): Đây là chiến dịch phản công quy mô lớn đầu tiên của ta, đối phó cuộc hành quân "Léa" của Pháp lên căn cứ địa Việt Bắc. Địch huy động hơn 12.000 quân tinh nhuệ, chia làm ba mũi tấn công: nhảy dù xuống Bắc Kạn, hành quân theo đường số 3 và đường số 4, kết hợp thủy quân theo sông Lô hòng "bắt sống" Chính phủ kháng chiến và tiêu diệt chủ lực Việt Minh. Dưới sự chỉ đạo của Đảng và Chủ tịch Hồ Chí Minh, quân dân ta đã chủ động phục kích, đánh nhỏ lẻ, chặn địch mọi hướng. Nhiều trận đánh nổi tiếng diễn ra: bắn rơi máy bay chỉ huy của địch tại Cao Bằng (Đại tá Lamberg tử trận), phục kích tiêu diệt đoàn xe cơ giới địch ở đèo Bông Lau (Lạng Sơn), đánh chìm tàu chiến Pháp trên sông Lô tại Đoan Hùng, Khe Lau… Sau 75 ngày giao chiến, ta đập tan cuộc tiến công của địch. Kết quả: Quân dân Việt Bắc loại khỏi vòng chiến đấu hơn 7.200 tên địch, bắn rơi 18 máy bay, đánh chìm 16 tàu chiến và 38 ca-nô, phá hủy 255 xe quân sự. Pháp buộc phải rút khỏi Việt Bắc trong thất bại, không đạt được mục tiêu chiến lược nào. Ý nghĩa: Chiến thắng Việt Bắc 1947 viết "giấy khai tử" cho chiến lược "đánh nhanh thắng nhanh" của Pháp, buộc chúng phải chuyển sang đánh lâu dài. Đây là thắng lợi chiến lược đầu tiên, đánh dấu bước trưởng thành vượt bậc của Quân đội Nhân dân Việt Nam về nghệ thuật chiến dịch phản công. Ta giữ vững căn cứ địa, chuyển cuộc kháng chiến sang thế cầm cự, chuẩn bị tổng phản công trong những năm sau.`,
				lat: 22.1455,
				lng: 105.8336, // Bắc Kạn (trong phạm vi VN)
			},
			{
				id: "dong-nai",
				name: "Trận La Ngà Đồng Nai",
				content: `Trận La Ngà (Định Quán, Đồng Nai, 1/3/1948): Đây là trận phục kích giao thông tiêu biểu trên chiến trường Nam Bộ. Chi đội 10 (bộ đội địa phương Khu 7 do Đội trưởng Huỳnh Văn Nghệ chỉ huy) đã mật phục trên Quốc lộ 20 (đoạn sông La Ngà, Định Quán) chờ đoàn xe quân sự lớn của Pháp từ Sài Gòn đi Đà Lạt. Chiều 1/3/1948, khi 70 xe quân sự lọt vào trận địa dài 7km, bộ đội ta kích nổ mìn, chia cắt đoàn xe rồi xung phong tiêu diệt. Kết quả: Ta phá hủy và chiếm phần lớn đoàn xe, diệt hàng trăm lính địch, làm thất bại nỗ lực tăng viện của chúng. Đây là tổn thất nặng nề của Pháp trên tuyến giao thông huyết mạch Sài Gòn – Đà Lạt. Ý nghĩa: Chiến thắng La Ngà đánh dấu bước trưởng thành vượt bậc của lực lượng vũ trang Đồng Nai về chiến thuật phục kích. Trận thắng này đã gây tiếng vang lớn, phá vỡ phần nào kế hoạch bình định Nam Bộ của địch, hạn chế chi viện của chúng cho chiến trường miền Trung và Bắc. La Ngà trở thành bài học kinh nghiệm quý báu, làm phong phú kho tàng nghệ thuật quân sự Việt Nam trong kháng chiến chống Pháp.`,
				lat: 11.2167,
				lng: 107.1667, // Định Quán, Đồng Nai (chính xác hơn)
			},
			{
				id: "tran-moc-hoa",
				name: "Trận Mộc Hóa",
				content: `Đây là trận công đồn tiêu biểu ở Nam Bộ. Đồn Mộc Hóa (thuộc Đồng Tháp Mười, sát biên giới Campuchia) do khoảng 70 lính lê dương cố thủ, được xem là tiền đồn án ngữ hành lang Đông – Tây Nam Bộ của Pháp. Bộ Tư lệnh Khu 8 quyết định tiến công cứ điểm này nhằm mở rộng căn cứ Đồng Tháp Mười và ra mắt Tiểu đoàn 307 mới thành lập. Lực lượng ta gồm Trung đoàn 120, Tiểu đoàn 307 và du kích địa phương dưới quyền chỉ huy của Tham mưu trưởng Khu 8 Nguyễn Chánh. Đêm 16/8/1948, quân ta nổ súng “công đồn và đả viện”. Sau 2 đợt xung phong không dứt điểm được đồn, ta chuyển sang vây ép buộc địch phải cầu viện. Sáng 18/8, một tiểu đoàn địch từ biên giới sang ứng cứu rơi vào ổ phục kích của ta trên sông và đồng lầy. Kết quả: Sau 3 ngày chiến đấu mưu trí, ta tiêu diệt toàn bộ cứ điểm Mộc Hóa (diệt 25 tên, bắt sống chỉ huy đồn – Trung úy Bertrand); đồng thời đánh thiệt hại nặng một tiểu đoàn cứu viện, diệt hàng trăm địch, thu hơn 300 khẩu súng các loại. Ý nghĩa: Chiến thắng Mộc Hóa gây chấn động Nam Bộ, “làm nức lòng cán bộ, chiến sĩ và đồng bào” khắp nơi. Thắng lợi này củng cố căn cứ Đồng Tháp Mười, khai thông hành lang liên lạc giữa các liên khu 7, 8, 9 và liên kết chiến trường Việt – Campuchia. Đây còn là dấu son minh chứng sự lãnh đạo tài tình của Bộ Tư lệnh Khu 8 và khẳng định lòng tin vào đường lối kháng chiến của Đảng tại Nam Bộ.`,
				lat: 10.75,
				lng: 105.95, // Mộc Hóa, Long An
			},
			{
				id: "chien-dich-bien-gioi-thu-dong",
				name: "Chiến dịch Biên giới thu đông",
				content: `Chiến dịch Biên Giới (Cao Bằng – Lạng Sơn, 16/9 – 14/10/1950): Còn gọi là Chiến dịch Lê Hồng Phong II, đây là chiến dịch tiến công lớn đầu tiên của ta nhằm giải phóng vùng biên giới Việt – Trung. Thực dân Pháp lúc này phòng thủ mạnh trên tuyến đường số 4 (Cao Bằng – Lạng Sơn) với 11 tiểu đoàn tinh nhuệ (khoảng 8.000 quân, có pháo binh, cơ giới và không quân hỗ trợ) cố giữ các cứ điểm Đông Khê, Thất Khê, Cao Bằng…. Ta huy động lực lượng tương đương 2 đại đoàn (~20.000 quân chủ lực, cùng bộ đội địa phương và dân công) trực tiếp do Đại tướng Võ Nguyên Giáp chỉ huy. Ngày 16/9/1950, ta mở màn bằng trận đánh công kiên cụm cứ điểm Đông Khê (Cao Bằng) và chiếm đồn này sau 3 ngày giao chiến ác liệt. Thất bại ở Đông Khê khiến địch hoảng loạn: Bộ chỉ huy Pháp vội lệnh rút bỏ thị xã Cao Bằng và đưa hai binh đoàn Lepage và Charton mở đường máu về hội quân. Nắm thời cơ, ta bố trí phục kích trên đường số 4. Từ 1–7/10/1950, liên tiếp các trận phục kích đẫm máu: ta tiêu diệt gọn binh đoàn Charton rút từ Cao Bằng và bẻ gãy binh đoàn Lepage ở khu vực Cốc Xá – đèo Khâu Chỉa. Đến giữa tháng 10, toàn bộ hệ thống đồn bốt từ Cao Bằng xuống Lạng Sơn sụp đổ; địch phải tháo chạy khỏi các cứ điểm còn lại (Na Sầm, Đồng Đăng, Lạng Sơn...). Kết quả: Sau 29 ngày đêm, quân ta đã loại khỏi vòng chiến đấu gần 10 tiểu đoàn địch (hơn 8.000 tên)qdnd.vn; giải phóng hoàn toàn biên giới từ Cao Bằng đến Đình Lập (Lạng Sơn). Ta thu hơn 3.000 tấn vũ khí, phương tiện chiến tranh của Pháploigiaihay.com. Ý nghĩa: Chiến thắng Biên Giới 1950 là bước ngoặt chiến lược của kháng chiến chống Pháp. Lần đầu tiên ta chủ động mở chiến dịch lớn giành thắng lợi vang dội, “tạo nên thế trận mới vững chắc” ở vùng Đông Bắc. Thắng lợi này chọc thủng “hành lang Đông-Tây” và phá tan âm mưu khóa chặt biên giới Việt – Trung của địch, mở thông con đường giao vận quốc tế để ta nhận viện trợ từ Liên Xô, Trung Quốc. Quân đội ta trưởng thành vượt bậc, giành quyền chủ động chiến lược, nâng cao niềm tin của toàn dân và bạn bè quốc tế vào thắng lợi cuối cùng của cuộc kháng chiến.`,
				lat: 22.6667,
				lng: 106.2667, // Đông Khê, Cao Bằng
			},
			{
				id: "chien-dich-hoa-binh",
				name: "Chiến dịch Hoà Bình",
				content: `Chiến dịch Hòa Bình (Hòa Bình, 10/12/1951 – 25/2/1952): Nhằm giành lại thế chủ động sau các thất bại năm 1950, tướng De Lattre đã chiếm thị xã Hòa Bình tháng 11/1951, lập phòng tuyến sông Đà để cắt liên lạc giữa Việt Bắc với Liên khu 3 và 4, đồng thời mở "Hành lang Đông – Tây" bảo vệ đồng bằng Bắc Bộ. Pháp huy động 16 tiểu đoàn tinh nhuệ (khoảng 12.000 quân) có xe tăng, pháo binh mạnh yểm trợ trấn giữ Hòa Bình và đường số 6. Ta quyết tâm tiến công địch mới chiếm đóng, sử dụng ba đại đoàn chủ lực (308, 312, 304) cùng lực lượng địa phương vây hãm địch ở Hòa Bình. Mặt khác, ta đẩy mạnh hoạt động phối hợp ở đồng bằng (đặc biệt trên Đường số 6 và vùng Hà Nam Ninh) để nhử địch phân tán. Từ tháng 12/1951, các trung đoàn chủ lực ta liên tục tập kích vào vị trí địch ven sông Đà (Ba Vì, Chẹ, Tu Vũ…) và đánh giao thông cắt đường 6. Quân Pháp ở Hòa Bình rơi vào thế bị vây chặt, tiếp tế khó khăn. Đầu tháng 2/1952, Pháp buộc phải rút quân khỏi Hòa Bình để tránh bị tiêu diệt. Kết quả: Ta phá tan âm mưu chiếm Hòa Bình của địch, bảo toàn được căn cứ địa và tuyến liên lạc chiến lược. Phía Pháp chịu thiệt hại rất nặng – đây là chiến dịch mà quân Pháp bị tiêu diệt và tan rã nhiều nhất từ đầu cuộc chiến. (Số liệu thống kê cho thấy hàng nghìn lính Âu – Phi bị loại khỏi vòng chiến trong chiến dịch này). Ý nghĩa: Thắng lợi Hòa Bình đập tan nỗ lực giành lại thế chủ động của địch, chứng tỏ bộ đội chủ lực ta đã đủ sức tiến công vào tập đoàn cứ điểm cơ động của Pháp trên chiến trường chính Bắc Bộ. Chiến dịch này đánh dấu bước trưởng thành vượt bậc về nghệ thuật tổ chức hiệp đồng công – thủ (vừa tiến công Hòa Bình, vừa đẩy mạnh du kích ở đồng bằng), tạo tiền đề cho các cuộc tiến công chiến lược Đông – Xuân sau đó.`,
				lat: 20.8181,
				lng: 105.3376, // Thị xã Hòa Bình
			},
			{
				id: "chien-dich-tay-bac",
				name: "Chiến dịch Tây Bắc",
				content: `Chiến dịch Tây Bắc (Sơn La – Yên Bái, 14/10 – 10/12/1952): Nhằm mở rộng căn cứ kháng chiến và tiêu diệt sinh lực địch ở vùng Tây Bắc, Bộ Tổng tư lệnh quyết định tiến công lên các tỉnh Sơn La, Lai Châu do quân Pháp chiếm đóng. Ta huy động ba đại đoàn chủ lực (308, 312, 316) cùng lực lượng địa phương, dưới sự chỉ đạo trực tiếp của Trung ương Đảng và Chủ tịch Hồ Chí Minh. Pháp phòng thủ Tây Bắc với ~6.000 quân (chủ yếu lính cơ động người Thái, dưới sự chỉ huy của tướng Gilles), co cụm tại các cứ điểm trọng yếu: Nghĩa Lộ, Sơn La, Nà Sản. Đêm 14/10/1952, ta mở màn bằng việc giải phóng thị xã Nghĩa Lộ (Yên Bái) sau trận công kích chớp nhoáng. Sau đó, các cánh quân ta thần tốc đánh chiếm toàn bộ khu vực hữu ngạn sông Đà. Trước sức tiến công mạnh của ta, địch bỏ chạy khỏi nhiều vị trí. Tại Sơn La, địch rút về tập trung cố thủ ở tập đoàn cứ điểm Nà Sản. Ta bao vây Nà Sản và tổ chức vài đợt tiến công vào cuối tháng 11 nhưng do địa hình bất lợi và hỏa lực địch mạnh, ta chưa hạ được cứ điểm này và quyết định kết thúc chiến dịch vào đầu tháng 12. Kết quả: Ta tiêu diệt và bắt sống hơn 6.000 địch (xấp xỉ 1/2 quân địch ở Tây Bắc); giải phóng một vùng rộng khoảng 30.000 km² với 25 vạn dân ở Tây Bắc. Vùng giải phóng mới được nối liền với căn cứ địa Việt Bắc và chiến khu Thượng Lào, tạo thế liên hoàn vững chắc cho ta trên toàn chiến trường. Ý nghĩa: Chiến thắng Tây Bắc 1952 đã trực tiếp tạo ra những tiền đề thuận lợi cho chiến cuộc Đông – Xuân 1953–54 mà đỉnh cao là Điện Biên Phủ. Ta giữ vững thế chủ động tiến công, làm thất bại âm mưu mở rộng chiếm đóng của địch ở vùng rừng núi. Chiến dịch này cũng giúp ta rút kinh nghiệm quý (đặc biệt từ thất bại tại cứ điểm Nà Sản) để chuẩn bị đánh thắng tập đoàn cứ điểm lớn hơn của địch sau này (ĐBP).`,
				lat: 21.325,
				lng: 104.4667, // Nghĩa Lộ, Yên Bái (WGS84)
			},
			{
				id: "chien-dich-thuong-lao",
				name: "Chiến dịch Thượng Lào",
				content: `Chiến dịch Thượng Lào (Sầm Nưa, Lào, 13/4 – 18/5/1953): Đây là chiến dịch phối hợp quân sự giữa Việt Nam và Lào, thể hiện tinh thần "giúp bạn là tự giúp mình". Sau thắng lợi Tây Bắc, ta quyết định đưa quân tình nguyện sang giải phóng tỉnh Sầm Nưa (Thượng Lào), đánh vào hậu phương của địch. Lực lượng ta gồm hai đại đoàn chủ lực (304, 308) và quân Pathet Lào, tổng cộng khoảng 20.000 quân, do Đại tướng Võ Nguyên Giáp chỉ huy. Địch ở Lào lúc này có khoảng 12.000 quân (cả Pháp và quân Vương quốc Lào thân Pháp), tập trung phòng thủ tại Sầm Nưa và các thị trấn. Ngày 13/4/1953, quân ta nổ súng tấn công cụm cứ điểm Sầm Nưa. Sau gần 3 tuần hành quân, truy quét, đến đầu tháng 5 ta hoàn toàn làm chủ tỉnh lỵ Sầm Nưa. Kết quả: Liên quân Lào – Việt đã diệt và bắt khoảng 2.800 quân địch (tương đương 1/5 tổng lực lượng địch ở Lào), giải phóng toàn bộ tỉnh Sầm Nưa và một phần tỉnh Xiêng Khoảng, Phông-xa-lì với diện tích hơn 4.000 km². Hàng nghìn tấn vũ khí, lương thực của địch bị thu giữ. Ý nghĩa: Chiến thắng Thượng Lào 1953 là biểu tượng sáng ngời của liên minh đoàn kết chiến đấu Lào – Việt. Thắng lợi này mở rộng vùng giải phóng Lào, đẩy mạnh cuộc kháng chiến của hai nước Đông Dương phối hợp nhịp nhàng với nhau. Về quân sự, ta đã buộc địch phải phân tán lực lượng ra chiến trường Thượng Lào, tạo thế thuận lợi cho ta chủ động lựa chọn điểm quyết chiến chiến lược Đông Xuân 1953–54 (thực dân Pháp sau đó nhảy dù chiếm Điện Biên Phủ để "đón lõng" ta, nhưng rốt cuộc rơi vào trận địa ta mong muốn).`,
				lat: 21.385,
				lng: 103.015, // Điện Biên Phủ (gần biên giới Lào)
			},
			{
				id: "chien-dich-dien-bien-phu",
				name: "Chiến dịch Điện Biên Phủ",
				content: `Chiến dịch Điện Biên Phủ (Điện Biên, 13/3 – 7/5/1954): Đây là chiến dịch quyết chiến chiến lược mang tính chất kết thúc cuộc kháng chiến. Thực dân Pháp xây dựng tập đoàn cứ điểm Điện Biên Phủ với 16.200 quân tinh nhuệ (gồm lính Pháp, Bắc Phi, Lê dương và quân đội Liên hiệp Pháp) do tướng De Castries chỉ huy, được bố trí thành 49 cứ điểm kiên cố chia làm 3 phân khu, hòng cố thủ "bất khả xâm phạm" để thu hút và tiêu diệt chủ lực ta. Ta huy động lực lượng mạnh nhất: 5 đại đoàn bộ binh (304, 308, 312, 316, 351 pháo binh) với khoảng 50.000 bộ đội chủ lực, 10.000 dân công, do Đại tướng Võ Nguyên Giáp chỉ huy. Sau quá trình chuẩn bị công phu (kéo pháo vào trận địa, đào chiến hào vây lấn), ta chọn phương châm "đánh chắc tiến chắc". Chiến dịch chia 3 đợt: Đợt 1 (13–17/3): Ta công kích tiêu diệt cứ điểm Him Lam và Độc Lập ở phía bắc, bẻ gãy vòng phòng ngự ngoài của địch. Đợt 2 (30/3 – 30/4): Ta đồng loạt tiến công các cứ điểm phía đông (E1, D1, C1, C2...), tiêu diệt 2.500 địch, chiếm phần lớn dãy đồi trọng yếu phía đông phân khu trung tâm. Đợt 3 (1–7/5): Ta tổng công kích vào sở chỉ huy tập đoàn cứ điểm. Chiều 7/5/1954, quân ta đánh chiếm hầm chỉ huy, bắt sống tướng De Castries cùng toàn bộ Bộ Tham mưu địch. Lá cờ "Quyết chiến – Quyết thắng" tung bay trên nóc hầm của tướng địch, đánh dấu giờ phút Điện Biên Phủ toàn thắng. Kết quả: Sau 56 ngày đêm quyết liệt, ta tiêu diệt và bắt sống toàn bộ 16.200 quân địch tại tập đoàn cứ điểm (trong đó có 1 thiếu tướng, 16 đại tá, hầu hết lực lượng tinh nhuệ nhất của Pháp bị xóa sổ). Ta thu toàn bộ vũ khí, phương tiện chiến tranh ở Điện Biên Phủ. Ý nghĩa: Chiến thắng Điện Biên Phủ là đỉnh cao của cuộc kháng chiến 9 năm, "đã khẳng định đường lối kháng chiến đúng đắn, sáng tạo của Đảng và Chủ tịch Hồ Chí Minh – đường lối chiến tranh nhân dân, toàn dân, toàn diện, trường kỳ, tự lực cánh sinh". Thắng lợi này kết thúc hoàn toàn cuộc chiến tranh xâm lược của thực dân Pháp ở Đông Dương, buộc chúng phải ký Hiệp định Genève ngày 21/7/1954, lập lại hòa bình trong danh dự. Điện Biên Phủ là một mốc son chói lọi, ghi vào lịch sử dân tộc như Bạch Đằng, Chi Lăng, Đống Đa, vang dội khắp năm châu, cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới.`,
				lat: 21.385,
				lng: 103.015, // Điện Biên Phủ
			},
			{
				id: "tran-dak-po",
				name: "Trận Đắk Pơ",
				content: `Trận Đắk Pơ (An Khê, Gia Lai, 24/6/1954): Đây là trận phục kích điển hình của quân dân Liên khu 5 trong giai đoạn cuối kháng chiến. Sau Điện Biên Phủ, quân Pháp ở Tây Nguyên rút bỏ các vị trí nhỏ, co cụm về An Khê và Pleiku. Binh đoàn cơ động 100 (GM100) – đơn vị thiện chiến của Pháp – được lệnh rút khỏi An Khê về Pleiku theo đường 19 trong tình trạng suy sụp tinh thần. Nắm thời cơ, Trung đoàn 96 chủ lực Liên khu 5 phối hợp du kích Gia Lai bố trí trận địa phục kích dài 1,2 km trên đường 19 đoạn qua cầu Đắk Pơ. Trưa 24/6/1954, khi 3 tiểu đoàn địch lọt vào trận địa, quân ta đồng loạt nổ súng tấn công. Kết quả: Ta gần như xóa sổ binh đoàn cơ động 100 của địch – đây là một trong những trận phục kích tiêu diệt đoàn quân địch lớn nhất trong suốt cuộc kháng chiến. Khoảng 500 lính địch bị loại khỏi vòng chiến chỉ trong vài giờ giao chiến, hàng trăm tên còn lại hoảng loạn tan rã. Ý nghĩa: Chiến thắng Đắk Pơ diễn ra sau Điện Biên Phủ hơn một tháng rưỡi, khi Hội nghị Genève đang thương lượng, đã giáng thêm đòn chí mạng vào thực dân Pháp. Đây được đánh giá là "trận đánh lớn, điển hình nhất" trên chiến trường Liên khu 5, thể hiện nghệ thuật phục kích xuất sắc của quân ta, góp phần kết thúc thắng lợi cuộc kháng chiến chống Pháp trên cả nước.`,
				lat: 13.9833,
				lng: 108.65, // Đắk Pơ, Gia Lai
			},
		],
	},
	{
		id: "cuoc-khang-chien-chong-my",
		name: "Cuộc kháng chiến chống Mỹ",
		description:
			"Cuộc kháng chiến chống Mỹ là cuộc kháng chiến của dân tộc Việt Nam chống lại sự can thiệp của Mỹ và chính quyền Sài Gòn trong thời kỳ 1954-1975.",
		address: [
			{
				id: "phong-trao-dong-khoi",
				name: "Phong trào Đồng Khởi",
				content: `Phong trào Đồng khởi (1/1960): Tháng 1/1960, dưới sự lãnh đạo của Nghị quyết 15, nhân dân Bến Tre vùng lên “Đồng khởi” đồng loạt tại 3 xã Định Thủy, Phước Hiệp, Bình Khánh. Lực lượng vũ trang và “đội quân tóc dài” nổi dậy phá kìm kẹp, diệt ác ôn, giành quyền làm chủ nhiều thôn xã. Phong trào nhanh chóng lan ra khắp miền Tây Nam Bộ và Trung Nam Bộ suốt năm 1960. Thắng lợi Đồng khởi ở Bến Tre đã mở ra cục diện mới đầy triển vọng cho cách mạng miền Nam, giáng đòn nặng nề vào chính sách thực dân mới của Mỹ – Diệm. Phong trào Đồng khởi đánh dấu bước ngoặt chiến lược: cách mạng miền Nam chuyển từ thế giữ gìn lực lượng sang thế tiến công. Nó dẫn tới sự ra đời của Mặt trận Dân tộc Giải phóng miền Nam (12/1960) và sự phát triển nhanh chóng của lực lượng vũ trang giải phóng, tạo tiền đề cho giai đoạn đấu tranh quân sự quyết liệt về sau.`,
				lat: 10.2417,
				lng: 106.375, // Bến Tre (chính xác hơn)
			},
			{
				id: "tran-ap-bac",
				name: "Trận Ấp Bắc",
				content: `Trận Ấp Bắc (2/1/1963, Tiền Giang): Tại ấp Tân Thới (Ấp Bắc), huyện Cai Lậy, lực lượng Quân giải phóng Quân khu 8 (~3 đại đội, có súng 12,7mm phòng không) đã xuất sắc đánh bại cuộc hành quân càn quét của hơn 2.000 quân Sài Gòn có cố vấn Mỹ, được yểm trợ hùng hậu (thiết giáp M113, máy bay trực thăng, máy bay ném bom). Suốt ngày 2/1/1963, địch mở 5 đợt tấn công bằng chiến thuật “Trực thăng vận” và “Thiết xa vận” nhưng đều bị quân ta đánh trả quyết liệt. Quân giải phóng bắn rơi 5 máy bay trực thăng Mỹ, bắn cháy 3 xe thiết giáp M113, loại khỏi vòng chiến đấu 450 địch (có 11 cố vấn Mỹ). Đến chiều, toàn bộ lực lượng ta rút an toàn. Chiến thắng Ấp Bắc vang dội đã chứng minh quân dân miền Nam đủ khả năng đánh bại chiến thuật mới của Mỹ, báo hiệu sự phá sản của chiến lược “Chiến tranh đặc biệt” mà Mỹ đặt nhiều kỳ vọng. Đồng thời, Ấp Bắc đánh dấu bước trưởng thành vượt bậc của Quân giải phóng về chiến thuật và tinh thần quyết chiến, mở ra khả năng mới để cách mạng miền Nam tiến lên tổng công kích đánh bại hoàn toàn chiến lược chiến tranh đặc biệt.`,
				lat: 10.4167,
				lng: 106.1667, // Cai Lậy, Tiền Giang
			},
			{
				id: "chien-dich-binh-gia",
				name: "Chiến dịch Bình Giã",
				content: `Chiến dịch Bình Giã (12/1964 – 1/1965): Đây là chiến dịch tiến công quy mô lớn đầu tiên của bộ đội chủ lực Miền (Quân giải phóng miền Nam) trên chiến trường Đông Nam Bộ. Diễn ra từ đêm 2/12/1964 đến 3/1/1965 tại khu vực Bình Giã (huyện Châu Đức, Bà Rịa), chiến dịch chia làm 2 đợt, quân ta đã đánh 5 trận cấp trung đoàn và nhiều trận nhỏ hỗ trợ. Ta tiêu diệt gọn 2 tiểu đoàn chủ lực quân đội Sài Gòn, đánh thiệt hại nặng 3 tiểu đoàn biệt động quân, bức rút nhiều đồn bốt, giải phóng vùng Đất Đỏ – Hoài Đức – Hát Dịch, nối liền căn cứ miền Đông với chiến khu Đ. Kết thúc chiến dịch, ta loại khỏi vòng chiến hơn 2.000 địch (có 28 lính Mỹ), bắt sống 293 tên; phá hủy 45 xe quân sự, bắn rơi 24 máy bay, thu 1.000 súng các loại. Chiến thắng Bình Giã báo hiệu sự phá sản của chiến lược “Chiến tranh đặc biệt” của Mỹ, làm thay đổi tương quan lực lượng có lợi cho ta. Thắng lợi này đánh dấu bước trưởng thành vượt bậc về khả năng tác chiến tập trung của bộ đội chủ lực miền Nam, khẳng định vai trò to lớn của lực lượng vũ trang cách mạng. Chiến dịch Bình Giã có ý nghĩa lịch sử to lớn, minh chứng sự đúng đắn của đường lối kháng chiến và củng cố niềm tin tất thắng cho quân dân ta trong giai đoạn ác liệt tiếp theo.`,
				lat: 10.6,
				lng: 107.2333, // Bình Giã, Bà Rịa
			},
			{
				id: "chien-dich-ba-gia",
				name: "Chiến dịch Ba Gia",
				content: `Chiến dịch Ba Gia (5–7/1965): Diễn ra trên địa bàn các huyện Sơn Tịnh, Bình Sơn (Quảng Ngãi) từ 28/5 đến 20/7/1965, đây là chiến dịch tiến công tiêu diệt lớn của Quân khu 5 phối hợp lực lượng địa phương Quảng Ngãi. Mở màn bằng trận đánh then chốt tại Ba Gia: đêm 28 rạng 29/5/1965, Trung đoàn 1 chủ lực Quân khu 5 phục kích tiêu diệt gọn Tiểu đoàn 1 Thuộc trung đoàn 51 của địch tại điểm cao Núi Mò O – Núi Quýt. Tiếp đó, ngày 30/5, địch điều lực lượng phản kích (Chiến đoàn 51 gồm nhiều tiểu đoàn bộ binh, biệt động, thủy quân lục chiến và thiết giáp) hòng tái chiếm Ba Gia, quân ta đã chặn đánh hiệu quả, bẻ gãy từng cánh quân. Đến 31/5/1965, ta làm chủ hoàn toàn trận địa Ba Gia, diệt gọn một chiến đoàn tinh nhuệ của địch. Phát huy thắng lợi, đến giữa tháng 7/1965 ta tiếp tục tiến công giải phóng thêm nhiều vùng nông thôn Quảng Ngãi. Kết thúc chiến dịch, quân ta tiêu diệt gọn 4 tiểu đoàn, đánh thiệt hại 2 tiểu đoàn khác, loại khỏi vòng chiến đấu 2.200 tên địch, phá hủy 15 xe quân sự, bắn rơi 18 máy bay, thu gần 1.000 súng các loại. Thắng lợi Ba Gia cùng Bình Giã và Đồng Xoài đã góp phần quyết định đánh bại hoàn toàn chiến lược “Chiến tranh đặc biệt” của Mỹ ở miền Nam. Đây cũng là bước trưởng thành vượt bậc của bộ đội chủ lực Quân khu 5 về nghệ thuật chiến dịch, lần đầu tiên mở chiến dịch quy mô vừa mà đạt hiệu quả diệt địch lớn, cổ vũ mạnh mẽ phong trào đấu tranh giải phóng ở Khu 5.`,
				lat: 15.1214,
				lng: 108.8044, // Ba Gia, Quảng Ngãi (chính xác hơn)
			},
			{
				id: "binh-long-phuoc-long",
				name: "Bình Long Phước Long",
				content: `Chiến dịch Đồng Xoài (5–7/1965): Là chiến dịch tiến công của Bộ Chỉ huy Miền tại đông Nam Bộ, diễn ra từ 10/5 đến 22/7/1965 trên địa bàn hai tỉnh Bình Long, Phước Long và phụ cận. Ta huy động 3 trung đoàn chủ lực Miền (271, 272, 273), 2 tiểu đoàn đặc công cùng lực lượng địa phương Phước Long, Bình Long, Biên Hòa… với tổng quân số hơn 12.000 người. Địch có khoảng 9 tiểu đoàn bộ binh tinh nhuệ (cả biệt động quân, dù), 1 chi đoàn thiết giáp, được không quân và pháo binh Mỹ yểm trợ. Quân ta mở màn chiến dịch bằng trận tiến công cứ điểm Phước Long và phục kích đánh viện trên đường 13, sau đó lần lượt đánh chiếm Đồng Xoài, đẩy lùi nhiều cuộc phản kích của Sư đoàn 5 quân Sài Gòn trong suốt tháng 6/1965. Đến 20/7/1965, ta đánh chiếm căn cứ Bù Đốp, hoàn thành chiến dịch thắng lợi. Tổng kết chiến dịch, quân ta tiêu diệt 4 tiểu đoàn chủ lực địch (trong đó có 1 tiểu đoàn dù chiến lược), cùng 24 đại đội bảo an, 6 chi đoàn cơ giới…; loại khỏi vòng chiến đấu gần 4.500 tên địch, bắn rơi 34 máy bay, phá hủy 60 xe quân sự, thu hơn 2.000 súng các loại. Ta giải phóng hoàn toàn hai tỉnh Phước Long, Bình Long, mở rộng vùng căn cứ miền Đông, khai thông hành lang chiến lược Trường Sơn vào Nam Bộ. Thắng lợi Đồng Xoài, cùng với Bình Giã và Ba Gia, đã đánh bại hoàn toàn chiến lược “Chiến tranh đặc biệt” của Mỹ. Chiến dịch cũng cho thấy bước tiến mới về tổ chức và chỉ huy tác chiến tập trung của ta; đặc biệt, lần đầu tiên quân giải phóng công kích thành công một cụm cứ điểm phòng ngự vững chắc (căn cứ Đồng Xoài), đánh dấu sự trưởng thành vượt bậc về nghệ thuật chiến dịch ở miền Nam.

Chiến dịch Đường 14 – Phước Long (12/1974 – 1/1975): Đây là chiến dịch tiến công then chốt mở màn Đông Xuân 1974–75. Từ ngày 13/12/1974, quân ta (Quân đoàn 4) liên tiếp đánh chiếm các vị trí trên đường 14, rồi tấn công giải phóng hoàn toàn tỉnh lỵ Phước Long vào ngày 6/1/1975. Ta tiêu diệt và làm tan rã toàn bộ lực lượng địch tại Phước Long, thu hàng ngàn tấn vũ khí, đạn dược (thu hơn 5.000 súng, 10.000 quả đạn pháo, bắn rơi 5 máy bay). Thắng lợi Phước Long có tầm vóc chiến lược, lần đầu tiên ta giải phóng một tỉnh hoàn toàn ở miền Nam. Mỹ hoàn toàn không có phản ứng can thiệp, chứng tỏ “Việt Nam hóa chiến tranh” đã thất bại và củng cố quyết tâm cho Bộ Chính trị đẩy nhanh kế hoạch Tổng tiến công 1975dantocmiennui.baotintuc.vn. Chiến thắng này được ví như “trận trinh sát chiến lược” thử phản ứng Mỹ, tạo bước ngoặt dẫn tới việc Trung ương Đảng hạ quyết tâm giải phóng hoàn toàn miền Nam trong năm 1975.`,
				lat: 11.5667,
				lng: 106.6667, // Đồng Xoài, Bình Phước
			},
			{
				id: "quang-tri",
				name: "Quảng Trị",
				content: `Chiến dịch Đường 9 – Khe Sanh (1–7/1968): Đầu năm 1968, để phối hợp với cuộc Tổng tiến công Tết Mậu Thân, Bộ Tổng tư lệnh mở chiến dịch Đường 9 – Khe Sanh ở Quảng Trị. Ta huy động một lực lượng lớn (5 sư đoàn bộ binh: 304, 325, 320, 324, 308; trung đoàn tăng thiết giáp; nhiều trung đoàn pháo binh, phòng không…) bao vây tập đoàn cứ điểm Khe Sanh do 6.000 lính thủy đánh bộ Mỹ trấn giữn. Quân ta tiến công mãnh liệt các cứ điểm ngoại vi: giải phóng Hướng Hóa, đánh thiệt hại nặng căn cứ Làng Vây (đêm 6–7/2/1968 ta lần đầu tiên đưa xe tăng vào tham chiến đánh sập cứ điểm này)n. Ta siết chặt vòng vây Khe Sanh suốt nửa năm, bẻ gãy nhiều đợt phản kích giải tỏa của địch. Trước nguy cơ bị Điện Biên Phủ thứ hai, ngày 15/7/1968 Mỹ buộc phải rút bỏ Khe Sanh. Sau 170 ngày đêm tiến công và vây hãm, đến 9/7/1968 Quảng Trị – Khe Sanh hoàn toàn giải phóng. Chiến dịch Đường 9 – Khe Sanh đã tiêu diệt một bộ phận quan trọng sinh lực địch (ước tính hơn 11.000 tên thương vong, 17 máy bay các loại bị bắn rơi) và giam chân 45% lực lượng cơ động chiến lược của Mỹ tại Bắc Quảng Trịn. Thắng lợi này là đòn nghi binh chiến lược xuất sắc, khiến địch bị thu hút về Khe Sanh đúng lúc ta tổng công kích trên khắp miền Nam. Chiến dịch góp phần quan trọng vào thắng lợi Tết Mậu Thân 1968 và chứng tỏ nghệ thuật chỉ đạo chiến lược tài tình của ta: dùng Khe Sanh để phân tán, kéo chủ lực địch ra rừng núi, tạo bất ngờ cho đợt tổng công kích đô thị.

Chiến dịch Xuân – Hè 1972 (Trị – Thiên 1972): Đây là đòn tiến công chiến lược năm 1972 của Quân Giải phóng trên toàn miền Nam, trong đó hướng Trị – Thiên (Quảng Trị – Thừa Thiên) là mũi chủ yếu. Ngày 30/3/1972, ta mở màn chiến dịch Trị – Thiên, huy động 3 sư đoàn chủ lực (304, 308, 324) cùng xe tăng, pháo binh đồng loạt vượt sông Bến Hải tấn công tuyến phòng ngự Quảng Trị. Sau hơn một tháng ác liệt, quân ta giải phóng hoàn toàn tỉnh Quảng Trị (1/5/1972) – lần đầu tiên ta chiếm được tỉnh lỵ của địch ở miền Nam. Địch phản kích quyết liệt hòng tái chiếm Quảng Trị. Từ 6/1972, tại thị xã và Thành cổ Quảng Trị diễn ra cuộc chiến đấu phòng ngự nổi tiếng 81 ngày đêm (từ 28/6 đến 16/9/1972): quân ta kiên cường cố thủ trước hỏa lực hủy diệt của Mỹ, đánh thiệt hại nặng Sư đoàn Dù và Thủy quân lục chiến tinh nhuệ của địch. Đến giữa 9/1972, ta chủ động rút khỏi Thành cổ, nhưng vẫn giữ được phần lớn vùng giải phóng. Ta đã bảo toàn 85% diện tích tỉnh Quảng Trị không cho địch chiếm lại. Chiến dịch Trị – Thiên 1972 thắng lợi đã làm tan rã khối quân phòng ngự mạnh của ngụy ở Bắc Trung Bộ, buộc Mỹ phải ngồi lại bàn đàm phán Paris với thế bất lợi. Cuộc chiến đấu anh dũng 81 ngày đêm giữ Thành cổ cũng trở thành biểu tượng lịch sử về ý chí “quyết tử cho Tổ quốc quyết sinh” của bộ đội ta.`,
				lat: 16.8,
				lng: 106.95, // Khe Sanh, Quảng Trị
			},
			{
				id: "thua-thien-hue",
				name: "Thừa Thiên Huế",
				content: `Tổng tiến công Tết Mậu Thân ở Huế (1–2/1968): Trong cuộc Tổng tiến công và nổi dậy Xuân 1968, Huế là chiến trường ác liệt và tiêu biểu nhất. Đêm 30 rạng 31/1/1968 (Tết Mậu Thân), quân giải phóng bất ngờ tấn công và nhanh chóng làm chủ phần lớn cố đô Huế. Lực lượng ta gồm 2 trung đoàn chủ lực Quân khu Trị Thiên cùng đặc công, địa phương đã đánh chiếm nhiều mục tiêu trọng yếu (Ty cảnh sát, Tòa tỉnh trưởng, sân bay Tây Lộc…). Cờ Mặt trận phấp phới trên Kỳ đài Huế suốt 25 ngày đêm. Nhân dân nội ngoại thành nổi dậy hỗ trợ, diệt ác trừ gian, lập chính quyền cách mạng ở nhiều khu phố, làng xã. Địch phản ứng dữ dội, tập trung lính Mỹ và Sài Gòn phản kích tái chiếm thành phố. Trải qua 26 ngày khói lửa (Huế là nơi giao tranh kéo dài nhất trong Tết Mậu Thân), đến 25/2/1968 ta chủ động rút khỏi Huế sau khi đã gây cho địch thiệt hại nặng nề (hơn 5.000 tên địch bị loại khỏi vòng chiến ở Huế). Cuộc chiến Tết Mậu Thân tại Huế tuy chưa giữ được thành quả lâu dài nhưng đã giáng đòn choáng váng vào ý chí xâm lược của Mỹ. Việc quân ta chiếm giữ một cố đô trọng yếu suốt gần một tháng gây tiếng vang chấn động dư luận Mỹ và thế giới, thúc đẩy phong trào phản chiến, buộc Mỹ phải xuống thang chiến tranh. Tết Mậu Thân 1968, với Huế là biểu tượng, đã trở thành bước ngoặt chiến lược khiến Mỹ tuyên bố “phi Mỹ hóa” chiến tranh, mở đường cho đàm phán Paris.

Giải phóng Huế (26/3/1975): Trong Chiến dịch Huế – Đà Nẵng (21–29/3/1975), quân ta tiến công tiêu diệt Tập đoàn phòng ngự Trị – Thiên của địch. Từ 21/3/1975, Quân đoàn 2 và Quân khu Trị Thiên đồng loạt đánh thẳng vào cố đô Huế từ ba hướng. Trước sức tiến công mãnh liệt như vũ bão, tuyến phòng thủ địch nhanh chóng tan rã. Ngày 25/3, quân ta làm chủ hoàn toàn thành phố Huế và toàn tỉnh Thừa Thiên. Tiếp đó, ta truy kích tiêu diệt địch rút chạy về Đà Nẵng. Thắng lợi thần tốc của Chiến dịch Huế – Đà Nẵng đã làm tan rã tập đoàn phòng ngự mạnh nhất của ngụy ở miền Trung, phá sản âm mưu co cụm chiến lược của địch về giữ Đà Nẵng. Toàn bộ địa bàn từ Huế đến Quảng Ngãi được giải phóng chỉ trong một tuần, tạo nên hậu phương chiến lược rộng lớn và thông suốt để ta tập kết lực lượng, tiếp liệu kịp thời cho Chiến dịch Hồ Chí Minh giải phóng Sài Gòn.`,
				lat: 16.4637,
				lng: 107.5909, // Thành Nội Huế
			},
			{
				id: "quang-nam-da-nang",
				name: "Quảng Nam - Đà Nẵng",
				content: `Giải phóng Đà Nẵng (29/3/1975): Sau khi Huế thất thủ, toàn bộ quân ngụy miền Trung hoảng loạn đổ dồn về Đà Nẵng. Chớp thời cơ, ngày 26–28/3/1975, Quân đoàn 2 và Quân khu 5 nhanh chóng triển khai bao vây Đà Nẵng từ hướng Bắc, Tây và Nam. Sáng 29/3, quân ta đồng loạt công kích, chỉ sau vài giờ đã làm chủ toàn bộ thành phố Đà Nẵng – căn cứ quân sự liên hợp lớn nhất của địch ở miền Nam. Hơn 100.000 quân ngụy tại đây tan rã, đầu hàng. Thắng lợi Đà Nẵng kết thúc Chiến dịch Huế – Đà Nẵng, hoàn thành giải phóng toàn bộ Quảng Trị, Thừa Thiên – Huế, Quảng Nam, Quảng Ngãi, Quảng Trị, tạo bàn đạp quan trọng để ta thần tốc tiến vào giải phóng Sài Gòn. Theo đánh giá, Chiến dịch Huế – Đà Nẵng là một trận quyết chiến chiến lược then chốt, “mở toang cánh cửa thép” của địch ở miền Trung, làm thay đổi hẳn cục diện chiến tranh có lợi cho ta.`,
				lat: 16.0544,
				lng: 108.2022, // Trung tâm Đà Nẵng
			},
			{
				id: "ha-noi-hai-phong",
				name: "Hà Nội và Hải Phòng",
				content: `“Điện Biên Phủ trên không” (12/1972): Cuối năm 1972, nhằm cứu vãn thế thua trên bàn đàm phán Paris, Mỹ mở cuộc tập kích chiến lược bằng máy bay B-52 vào Hà Nội, Hải Phòng và một số nơi từ ngày 18 đến 29/12/1972 (chiến dịch Linebacker II). Quân dân miền Bắc đã anh dũng chống trả suốt 12 ngày đêm cuối năm 1972, tạo nên chiến thắng vang dội mà báo chí gọi là “Điện Biên Phủ trên không”. Bằng lưới lửa phòng không dày đặc (tên lửa SAM-2, pháo cao xạ, tiêm kích MiG), ta đã bắn rơi 34 máy bay B-52 – pháo đài bay chiến lược hiện đại nhất của Mỹ – cùng nhiều máy bay chiến thuật khác, đánh bại hoàn toàn cuộc tập kích đường không của Mỹ. Thất bại nặng nề buộc Mỹ phải tuyên bố ngừng ném bom miền Bắc và trở lại ký Hiệp định Paris (27/1/1973) với các điều khoản có lợi cho Việt Nam. Chiến thắng 12 ngày đêm khẳng định trí tuệ và bản lĩnh quân dân ta, lập nên kỳ tích bảo vệ miền Bắc xã hội chủ nghĩa, đồng thời tạo bước ngoặt quyết định trong cục diện cuộc kháng chiến chống Mỹbqp.vn. Sau sự kiện này, Mỹ rút hết quân tác chiến khỏi Việt Nam, tạo điều kiện thuận lợi để ta giải phóng hoàn toàn miền Nam.`,
				lat: 21.0285,
				lng: 105.8542, // Hà Nội (đại diện cho cả hai)
			},
			{
				id: "dak-lak",
				name: "Đắk Lắk",
				content: `Chiến dịch Tây Nguyên (3/1975): Mở đầu Tổng tiến công mùa Xuân 1975, Bộ Tổng tư lệnh chọn Tây Nguyên làm hướng tiến công bất ngờ. Quân đoàn 3 của ta bí mật hành quân vào Đắk Lắk, tập kết áp sát mục tiêu then chốt là thị xã Buôn Ma Thuột. Rạng sáng 10/3/1975, ta nổ súng công kích Buôn Ma Thuột từ nhiều hướng. Sau 2 ngày ác liệt, đến trưa 11/3, quân ta hoàn toàn làm chủ thị xã Buôn Ma Thuột – thủ phủ Tây Nguyên. Quân địch phản ứng yếu ớt rồi rút chạy trên đường 7, bị ta truy kích tiêu diệt trong “cơn hoảng loạn Phượng Hoàng”. Kết quả, chiến dịch Tây Nguyên toàn thắng (24/3/1975): ta tiêu diệt Quân đoàn 2 – lực lượng chủ lực địch ở Tây Nguyên (xóa sổ Sư đoàn 23 ngụy), giải phóng toàn bộ các tỉnh Kon Tum, Pleiku, Đắk Lắk. Chiến thắng Buôn Ma Thuột 10/3/1975 được đánh giá là trận quyết chiến then chốt, mở ra thời cơ lớn cho ta. Thắng lợi chiến dịch Tây Nguyên đã tạo bước ngoặt chuyển hóa nhanh cục diện chiến tranh: hệ thống phòng thủ chiến lược của địch rung chuyển và sụp đổ dây chuyền, buộc chúng phải bỏ cao nguyên, co cụm về đồng bằngn. Thắng lợi này “mở toang cánh cửa” để quân ta thần tốc tiến xuống giải phóng các tỉnh duyên hải và Sài Gòn – Gia Định trong chiến dịch cuối cùng.`,
				lat: 12.71,
				lng: 108.2378, // Buôn Ma Thuột
			},
			{
				id: "dong-nai",
				name: "Đồng Nai",
				content: `Trận Xuân Lộc (4/1975): Thị xã Xuân Lộc (tỉnh Long Khánh, nay thuộc Đồng Nai) được địch xây dựng thành tuyến phòng thủ trọng yếu án ngữ phía đông Sài Gòn – được mệnh danh là “cánh cửa thép”. Từ 9/4/1975, Quân đoàn 4 của ta mở Chiến dịch Xuân Lộc, liên tục công kích quyết liệt Sư đoàn 18 ngụy và lực lượng tổng trù bị địch cố thủ tại đây. Giao tranh ác liệt kéo dài gần 12 ngày, quân ngụy nhiều lần phản kích hòng cố giữ Xuân Lộc nhưng đều bị bẻ gãy. Ngày 21/4/1975, quân ta tổng công kích lần cuối, đánh chiếm hoàn toàn Xuân Lộc, giải phóng tỉnh Long Khánh. Thất thủ Xuân Lộc đã làm tan vỡ tuyến phòng ngự cuối cùng bảo vệ Sài Gòn của địch. Cánh cửa thép Xuân Lộc bị mở toang, Quân đoàn 4 thừa thắng ào ạt tiến về Biên Hòa, mở đường cho 5 cánh quân chủ lực của ta đồng loạt áp sát Sài Gòn. Trận Xuân Lộc là trận đánh lớn cuối cùng của quân ngụy và được coi là “trận đánh bản lề” quyết định số phận của chính quyền Sài Gòn, bởi ngay sau khi mất Xuân Lộc, Tổng thống Nguyễn Văn Thiệu phải từ chức (21/4/1975). Chiến thắng Xuân Lộc đã tạo thời cơ thuận lợi để quân ta thực hành Chiến dịch Hồ Chí Minh lịch sử, giải phóng Sài Gòn.`,
				lat: 10.8,
				lng: 107.3833, // Xuân Lộc, Đồng Nai
			},
			{
				id: "tp-hcm",
				name: "TP. Hồ Chí Minh",
				content: `Chiến dịch Hồ Chí Minh (4/1975): Đây là chiến dịch tấn công cuối cùng giải phóng Sài Gòn – Gia Định và toàn miền Nam. Sau khi đánh tan tuyến phòng ngự vòng ngoài của địch (Phan Rang, Xuân Lộc…), Bộ Chính trị quyết định mở chiến dịch mang tên Bác Hồ. Ta huy động một lực lượng áp đảo: khoảng 5 quân đoàn (15 sư đoàn, ~270.000 quân), các binh đoàn chủ lực tinh nhuệ từ bốn hướng chiến lược đã tiến về hợp vây Sài Gòn. Rạng sáng 26/4/1975, chiến dịch mở màn bằng loạt pháo kích mãnh liệt, sau đó 5 cánh quân đồng loạt vượt tuyến phòng thủ, đánh thẳng vào trung tâm Sài Gòn. Ngày 28–29/4, quân ta lần lượt đánh chiếm căn cứ Nước Trong, căn cứ Đồng Dù – Củ Chi, sân bay Tân Sơn Nhất, Bộ Tổng Tham mưu ngụy… Sáng 30/4/1975, Quân đoàn 2 và Quân đoàn 4 từ các hướng Đông và Bắc tiến vào nội đô. 11 giờ 30 phút trưa 30/4, xe tăng và bộ binh quân giải phóng chiếm Dinh Độc Lập, Tổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện. Lá cờ cách mạng tung bay trên Dinh Độc Lập, báo hiệu Chiến dịch Hồ Chí Minh toàn thắng và miền Nam hoàn toàn được giải phóng. Chiến dịch Hồ Chí Minh lịch sử thắng lợi chỉ sau 5 ngày đã đập tan hoàn toàn ngụy quân, ngụy quyền Sài Gòn (hơn 400.000 địch tan rã, bỏ vũ khí đầu hàng), kết thúc 21 năm chiến tranh, thu non sông về một mối. Đại thắng mùa Xuân 1975 đi vào lịch sử như một chiến công hiển hách, là biểu tượng chói sáng của sức mạnh đoàn kết dân tộc kết hợp với đấu tranh cách mạng kiên cường, chấm dứt ách thống trị thực dân – đế quốc trên đất nước ta.`,
				lat: 10.7769,
				lng: 106.7009, // Dinh Độc Lập, TP.HCM
			},
		],
	},
];

export default MAP_DATA;

export const TEAM_MEMBER = [
	{
		id: "SS180946",
		name: "Hồ Nguyễn Minh Phương",
		role: "Làm nội dung",
	},
	{
		id: "SS180964",
		name: "Trần Thanh Thuỷ",
		role: "Làm nội dung",
	},
	{
		id: "SS180767",
		name: "Đặng Quốc Nhân",
		role: "Làm nội dung",
	},
	{
		id: "SE183112",
		name: "Nguyễn Hoàng Điền",
		role: "Code",
	},
	{
		id: "SE161371",
		name: "Nguyễn Việt Hoàng",
		role: "Code",
	},
];

export const DATA_OF_PROJECT = [
	{
		title: "Nội dung",
		link: "https://docs.google.com/document/d/1mtHTAK5QA5ZcCao0CEWGzfdg-LozPcd6Oo1PUjN-FVk/edit?pli=1&tab=t.0#heading=h.vwrmvqcmo1uf",
	},
	{
		title: "Câu lệnh cho chatgpt",
		link: "https://docs.google.com/document/d/1mtHTAK5QA5ZcCao0CEWGzfdg-LozPcd6Oo1PUjN-FVk/edit?pli=1&tab=t.6akyja73yb04",
	},
];
