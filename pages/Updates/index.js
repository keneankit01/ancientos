import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Box, Typography } from "@mui/material";
import Heading from "../../components/heading/Heading";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AndroidRoundedIcon from "@mui/icons-material/AndroidRounded";
import GoBack from "../../components/goBack/GoBack";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));
const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={
			<ArrowForwardIosSharpIcon
				fontSize="large"
				sx={{
					p: 1,
					borderRadius: 5,
					boxShadow: 5,
					background: "linear-gradient(to left, #c14d6422, #4359c630)",
				}}
			/>
		}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor: "transparent",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(0),
	},
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
export default function Updates() {
	const update = [
		{
			build: "7.0",
			version: "Android 13",
			config: ["Coming Soon..."],
		},
		{
			build: "6.2 ",
			version: "Android 12",
			config: [
				"January security",
				"Improve FPS Info",
				"Update GMS",
				"Enable carrier label for all",
				"Improve brightness slider",
				"Improve ambient music",
				"Improve pocked mode",
				"Apply monet to fingerprint authentication ripple animation",
				"Reduce screenshot delay",
				"Don't crash QS panel when not using media player",
				"Allow user to select low power Refresh rate",
				"Change network traffic from aosp krypton impl",
				"Add toogle bluetooth batery level",
				"Add allow to pulse new track in ambient music",
				"Add ambient pulse light",
				"Add quick unlock compatible with long pin/pass",
				"Add notification count",
				"Add TouchGesture",
				"Add allow schedulling AOD",
				"Add lockscreen charging info",
				"Add superdart, vooc, warp, dash",
				"Add extend swipe /",
				" back swipe to trigger action/app/activities",
				"Add custom udfps icon",
				"Add FOD color pressed",
				"Add some fix NPE",
				"Add allow user to disable night light on FOD",
				"Add haptic feedback optional on back gesture",
				"Add UDFPS haptic feedback optional",
				"Add udfps icon and animation",
				"Add new bootanimation",
				"Add toogle signature spoofing",
				"Add Extend Pulse QS Panel",
				"Add pulse custom grafity and center mirror",
				"Add pulse vertical mirror",
				"Add icon pack style",
				"Add font style",
				"Add shape style",
				"Add double tap to trigger doze",
				"Add Theme color",
				"Add disable secure on LS",
				"Add toogle mic/camera privacy indicator",
				"Add toogle location indicator",
				"Add screen of animation",
				"Add allow forcing small keyguard",
				"Add rounde line pulse",
				"Add toogle floating rotation button",
				"Add qs columns count settings",
				"Add max icon notification custom",
				"Add flashlight on incoming call",
				"Add wifi timeout",
				"Add bluetooth timeout",
				"Add more volte and vowifi icon",
				"Add custom rate in screen record",
				"Add volume dialog timeout",
				"Add alert slider",
				"Add BT Qti",
				"Add Settings Homepage Style",
				"Add Lockscreen Clock Style",
				"Add Lockscreen Clock font (only for some for now)",
				"Add Lockscreen Clock Custom Background (only for some for now)",
				"Add More Landscape Battery Style",
				"Add More StatusBar Signal Wifi Icon Style",
				"Add More Qstile Background Style",
				"Add Transparent Statusbar Clock with custom background",
				"Add More Qs Clock",
				"Add Brightness Slider Style",
				"Add Volume Seekbar Style and Background color",
				"Add Volume Percentage and its Placement",
				"Add Toggle to leftside Volume panel",
				"Add Custom Dimension for statusbar Signal icon",
				"Add Custom Dimension for statusbar Wifi icon",
				"Add Custom Dimension for statusbar Battery icon",
				"Add Corner Radius Style",
				"Add Custom Size Pill Gesture Navigation Bar",
				"Add Navigation Bar Icon Style",
				"Add Extended Volume Panel",
				"Add Datausage monthly on Qs Clock ( toggleable )",
				"Add Edge gesture dead zone",
				"Add screen height for back gestures",
				"Add Game Space from aosp krypton",
				"Add more custom icon theme pixel launcher",
			],
		},
		{
			build: "6.1",
			version: "Android 12 Beta",
			config: [
				"- November sec r12",
				"- New design AncientUI 5.0 ( qs panel design, qsClock style, qsClock gravity, qsClock animation style)",
				"- Redesign Settings UI (by @nabil_aba)with new Look",
				"- Added Custom statusbar clock background",
				"- Added data style , signal wifi style",
				"- Added custom charging icon",
				"- Added New Landscape Battery Style and Custom fill color",
				"- Added Dual Statusbar and Style",
				"- Added Statusbar Height Style",
				"- Added StatusBar padding custom and",
				"fix on go back default after lock the screen",
				"- Added QsTile Style",
				"- Added toggle Skiny notification",
				"- Added Custom Icon and coloring Dissmiss Button",
				"- Added Colored Notification icon",
				"- Added simple RGB color display",
				"- Added monet impl from kdrag0n",
				"- Added some permissions",
				"- Added three fingers swipe to SS",
				"- Added PixelProps",
				"- Added deep sleep info to uptime preference",
				"- Added keyhandler",
				"- Added flipendo",
				"- Added smart space",
				"- Added back increasing ring",
				"- Added unlinked ringtone and notif volume",
				"- Added statusbar icon tunner",
				"- Added reset battery stats",
				"- Added scramble pin layout when unlock",
				"- Added forward LS quick unlock",
				"- Added haptics feedback to tiles",
				"- Added animation quick settings",
				"- Added interpolatir to qs tiles",
				"- Added powermenu custom",
				"- Added dt2s on LS",
				"- Added dt2s on statusbar",
				"- Added doubletap/longpress to torch",
				"- Added Volume rocker",
				"- Added volume key music control",
				"- Added usb configuration",
				"- Added noisy toogle",
				"- Added caffeine, ambient, usb, sync, sound, partial/ full ss, headsup",
				"- reboot/recovery, dataswitch, aod, volume, compass, FPS info",
				"- Added toogle for disable wired charging animation",
				"- Added battery saver profiles",
				"- Added statusbar logo",
				"- Added brightness slider change",
				"- Added hiding call strength",
				"- Added pocket mode",
				"- Added carrier label",
				"- Added double tap to wake on doze",
				"- Added options to enable AOD on charging only",
				"- Added lessboring headsup",
				"- Added kill button to notif guts",
				"- Added show current/new version on packageinstaller",
				"- Added VPN tethering hotspot",
				"- Added combine signal toogle",
				"- Added navbar inversions",
				"- Added navbar toogle",
				"- Added navbar layout",
				"- Added arrow key while typing",
				"- Added custom length navbar gestures",
				"- Added options to cycle through ringer mode",
				"- Added changing monet from AncientSettings",
				"- Added required unlock to use sensitive qs tiles",
				"- Added headsup blacklist",
				"- Added headsup timeout",
				"- Added headsup snooze",
				"- Added qs pulldown with one finger",
				"- Added statusbar clock date custom",
				"- Added running services from qs panel",
				"- Added edit icon toogle",
				"- Added wake on plug",
				"- Added network traffic indicator",
				"- Added hw key custom",
				"- Added LS media artwork blur",
				"- Added fingerprint authentication vibrate",
				"- Added volume key control",
				"- Added incall vibrate",
				"- Added display data disable indicator icon",
				"- Added roaming indicator optional",
				"- Added custom light button",
				"- Added home wakeup",
				"- Added cpu info",
				"- Added pulse magic",
				"- Added allow disable qs footer",
				"- Added smart pulldown",
				"- Added ringtone for multisim",
				"- Added battery light custom",
				"- Added notif led light custom",
				"- Added disable led after full charging",
				"- Added live volume steps",
				"- Added forward cm security",
				"- Added old mobile data style",
				"- Added statusbar brightness control",
				"- Added batery icon custom",
				"- Added 4G icon instead LTE",
				"- Added VOLTE style",
				"- Added allow swal volume button rotation",
				"- Added hide powermenu on secure LS",
				"- Added toast icon switch",
				"- Added hiding notification header",
				"- Added oem fastcharge detect",
				"- Added udfps",
				"- Added disable screenshot shutter sound",
				"- Added toogle for disable battery estimate",
				"- Improve NFC tiles",
				"- Force disable ambient music",
				"- Update some icon to MD2",
				"- Improve screenrecord",
				"- Removed restrictions for system audio record",
				"- Allow disable refresh rate lowering in battery saver",
				"- Enable some google features",
				"- More me forget",
			],
		},
		{
			build: "5.7",
			version: "Android 11",
			config: [
				"- November sec",
				"- Added system charging animation",
				"- Added battery saver profiles",
				"- Added allow disable permissions hub",
				"- Added 3 mode display cutout",
				"- Added custom rounded corner",
				"- Added allow device to disable blackfill for display cutout",
				"- Added spoof galaxy 4 watch and some samsung list",
				"- Improve caffeine tiles",
				"- Update statusbar logo",
			],
		},
		{
			build: "5.6",
			version: "Android 11",
			config: [
				"• September security r43",
				"• Added Monetwannabe 2.2 from DotOS ( credit and thanks to @iacobionut01 , KieronQuinn, and kdragon)",
				"• Added Weather QsClock style also LS/Statusbar",
				"• Added Megalith Card Style",
				"• Added IOS switch style and 5 more",
				"• Added Monet settings theme (with or without card)",
				"• Added Ancient Volume Style",
				"• Added Custom Volume progress and thumb style (aosp/ancient style only)",
				"• Added Volume Custom coloring (aosp/ancient style only)",
				"• Added Left Volume panel",
				"• Added DataUsage footer and its icon style",
				"• Added Dismiss icon and color style",
				"• Added Dismiss background and color style",
				"• Improve Android S clock",
				"• Add Dcsms  StatusBar triple Row style (find more mod https://t.me/sbjamet )",
				"• Added more Battery Danny Style",
				"• Added more statusbar icon",
				"• Rework QsTile style to non-overlay",
				"• Added Notif Header icon background style",
				"• Added Back Statusbar Height",
				"• Added more Notif and Qspanel Background style",
				"• Added more Custom Qspanel Background ( gradient and custom color )",
				"• Added Dashboard Icon and background Custom color picker",
				"• Added Ram Usage  and style in quickstep launcher3",
				"• Added gaming mode from exthmui",
				"• Added left and right virtual buttons while typing",
				"• Added sistemwide fonts",
				"• Added screenshot quality",
				"• Added mac address firewall",
				"• Added hotspot client",
				"• Added pocket mode",
				"• Added maximum notification style",
				"• Added A12 widget",
				"• Added Custom charging logo and symbol",
				"• Added GPU render in developer options",
				"• Added QS media art",
				"• Improve kill app in notification",
				"• Switch to PE faceunlock",
				"• Fixed fc when use ReTicker",
				"• Fixed safetynet",
				"• Fixed untinted system icon in lockscreen",
				"• Fixed longpress on mobile data",
				"• Fixed overlay reset every reboot",
				"• Improve FPS Info",
				"• Improve Settings appearance",
			],
		},
		{
			build: "5.5",
			version: "Android 11",
			config: [
				"• July Security r39",
				"• Added QS Panel style (Stocklike, Ancient UI, OOS like panel)",
				"• Improve and Add more StatusBar Dual Row Style (statusbar height now autoswitch according to style)",
				"(thanks to @krisnaabdillah and @nabil_aba for the new layout)",
				"• Added more statusbar icon",
				"• Rework Brightness Style to Non overlay",
				"• Added Notif Header text color",
				"• Improve Simple Statusbar Padding",
				"• Rework Font overlay",
				"• Re enable qs draghandle (switchable with qqs setting n brightness on stocklike panel)",
				"• Improve n Rework Header Image Size",
				"• Improve and Add more LandScape Battery (thanks to @hellonetizen for new battery style)",
				"• Improve statusbar toggle slider",
				"• Force enable all CarrierLabel placement",
				"• Rework Ancient QsClock Style to non overlay (improve speed when switching style)",
				"• Added back Ancient a10 QsClock to style",
				"• Added Settings Homepage like stock style",
				"• Added more settings theme (with or without card)",
				"• Added volume for app",
				"• Added WFD legacy output video mode",
				"• Added livedisplay",
				"• Added Monet engine from DotOS (Need re apply wallpaper image after choose color pallete)",
				"• Added LS clock Android S and more",
				"• Added reticker",
				"• Added headsup timeout",
				"• Added wakelockblocker",
				"• Added alarmblocker",
				"• Added switches style android S",
				"• Improve FOD",
				"• Fixed charging vibrate",
				"• Disable ambient music",
				"• Updated to accenter 3.0",
				"• Enable network activity indicator",
				"• Allow disable suggestion in launcher",
				"• Misc",
			],
		},
		{
			build: "5.4",
			version: "Android 11",
			config: [
				"• May Security r37",
				"• Fixed hex accent picker",
				"• Fixed VPN hotspot",
				"• Fixed QS Panel opacy when landscape",
				"• Fixed VPN and qs media when landscape",
				"• Fixed some clock format AM/PM",
				"• Fixed scrooling in force fullscreen",
				"• Fixed other lights when backlight uses SurfaceController API",
				"• Move DisplayCutout to display settings",
				"• Added wifi timeout",
				"• Added bluetooth timeout",
				"• Added refresh rate",
				"• Added OOS 11 Volte icon",
				"• Added back screenshot delete toast",
				"• Added QS tiles size",
				"• Added QS tiles columns",
				"• Added lockscreen background blur",
				"• Added QS Custom background",
				"• Added statusbar notification ticker",
				"• Added settings style",
				"• Added A12 QS Tile style background",
				"• Added Data icon style",
				"• Added show and edit ambient icon on LS",
				"• Added notification background opacy",
				"• Added Custom Statusbar Clock Background",
				"• Added colored statusbar icon and notification",
				"• Added option to scale default wallpaper to screen size",
				"• Added hide notch",
				"• Improve clipboard access toast",
				"• Improve Settings",
				"• Improve Doze on charge",
				"• Improve some lockscreen clock",
				"• Improve landscap battery",
				"• Improve blur radius from kdrag0n",
				"• Improve aosp screenrecord",
				"• Improve bootanimation",
				"• Re-enable side clock in statusbar dual",
				"• Misc",
			],
		},
		{
			build: "5.3",
			version: "Android 11",
			config: [
				"• April Security",
				"• Fixed bubble",
				"• Fixed backuptools for dinamic",
				"• Fixed headsup tiles",
				"• New Bootanimation",
				"• Improve Volume dialog (fixed issue when landscape)",
				"• Improve FOD",
				"• Improve CustomDoze",
				"• Improve Brightness icon view",
				"• Improve Powerusagesummary",
				"• Improve Notification layout header",
				"• Improve QS Panel Layout",
				"• Redesign Media player view",
				"• Convert Global actions with blur (powermenu)",
				"• Added AIDL lineage powerhal",
				"• Added Dirac and misound FX support",
				"• Added Automated DC dimming",
				"• Added Fluid and IDE LS clock",
				"• Added Applock",
				"• Added Multisim ringtone",
				"• Added Vibratorservice from oneplus",
				"• Added Aggressive batery",
				"• Added Schedulling AOD",
				"• Added Longpress power for torch",
				"• Added Smartcutoff",
				"• Added QS blur from a10 ( just for alternative)",
				"• Added Landscape battery style",
				"• Added Extended audio panel",
				"• Added Statusbar dual bar style",
				"• Added Simple padding overlay",
				"• Added brightness percentage in panel",
				"• Added QS rainbow",
				"• Added Footer custom carrier",
				"• Added Collapsing Toolbar HomePage and Some SubSetting Page with toggle on off",
				"• background and style (default was disable)",
				"• Added asus longshot",
				"• Launcher3: Added app drawer opacity",
				"• Launcher3: Added Icon Pack Support from Shade Launcher",
				"• Launcher3: Added AppInfo Bottom Sheet from Shade Launcher",
				"• Launcher3: Hide DragHandle arrow",
				"• Launcher3: Added support OOS icon pack",
				"• New bootanimation thanks to @zazaaw",
				"• Misc",
			],
		},
		{
			build: "5.2 ",
			version: "Android 11 beta3",
			config: [
				"• February Security",
				"• Redesign SystemUI and Settings",
				"• Added custom navbar layout",
				"• Added ambient music",
				"• Added turbo charging",
				"• Added tiles cpu info, fps, kill app, longshot, navigation bar",
				"• Added statusbar header image",
				"• Added disable/enable QS media player (default disable)",
				"• Added ios faceunlock animation",
				"• Added configure lockscreen media artwork blur level",
				"• Added data disable indicator",
				"• Added more qs clock",
				"• Added QS panel opacity",
				"• Added header image height configurable",
				"• Added text clock gradient (thanks @nabil_aba)",
				"• Added qs clock gradient style",
				"• Added tooltip and topad style",
				"• Added quick settings pull down with one finger",
				"• Added toggle to completely hide status bar on lockscreen",
				"• Added quick pulldown statusbar anywhere",
				"• Added fingerprint error vibration",
				"• Added sensor block packagelist",
				"• Added cutout force fullscreen",
				"• Added OTA App",
				"• Added ios toast notification",
				"• Added touch sensitive",
				"• Added custom carrier label",
				"• Added running service toogle",
				"• Added simple brightness style",
				"• Added simple QS bq style",
				"• Added OOS style notification clear all button (toggleable)",
				"• Added center notification headers",
				"• Added Expandable stock volume slider",
				"• Fixed pulse visualizer crash when disable navbar",
				"• Fixed issue in security method",
				"• Fixed issue cannot allow permissions for app installed",
				"• Update PixelPropsUtils",
				"• Update Launcher",
				"• Improve ambient pulse",
				"• Improve notification header",
				"• Improve source",
			],
		},
		{
			build: "5.1 ",
			version: "Android 11 beta2",
			config: [
				"• January sec r27",
				"• Redesign SystemUI and Settings",
				"• Fixed battery estimate",
				"• Fixed sound picker",
				"• Enable zygote preforking",
				"• Added FOD recognizing animation",
				"• Added screen off FOD",
				"• Added FOD picker",
				"• Added FOD pressed color",
				"• Added tiles sync, volume panel, reboot, data switch, music",
				"• Added wiret/bt headset ringtone audio focus customizable",
				"• Added DU System themes",
				"• Added pulse equalizer navbar/lockscreen",
				"• Added QS tile style picker",
				"• Added qs tint with accent color",
				"• Added RGB Accenter",
				"• Added disco on qs",
				"• Added QS clock style",
				"• Added QS analog clock style",
				"• Added rounded corner style",
				"• Added statusbar height style",
				"• Added dual row statusbar mod",
				"• Added signature spoofing",
				"• Added show/hide edit icon",
				"• Added statusbar logo",
				"• Added radius gesture navbar",
				"• Added max lockscreen notification count",
				"• Added statusbar notification count",
				"• Added navbar style",
				"• Added settings style",
				"• Added switch style",
				"• Added AOKP system animation",
				"• Added ethan animation",
				"• Added toast animation",
				"• Added smart pixels",
				"• Added optional screenshot type",
				"• Added disable notification vibration",
				"• Added Data usage",
				"• Added screenshot and screenrecord on powermenu",
				"• Added old style data indicator",
				"• Added theme settings dashbicons icons",
				"• Added Faceunlock",
				"• Added swipeup on keyguard to use faceunlock",
				"• Added navbar layout inversion",
				"• Added simple icon pack in launcher",
				"• Added kill app button in launcher",
				"• Added more style statusbar icon",
				"• Added more fonts",
				"• Added more charging animation",
				"• Fixed volume rocker skip track on ambient",
				"• Screenoff volume skiptrack",
				"• Pulse on new music track (ambient music)",
				"• Switch GalleryGo",
				"• Allow set back swipe deadzone",
				"• Allow enable/disable powermenu",
				"• Custom doze brightness and pulse brightness",
				"• Improve gaming mode",
				"• Improve edge light",
				"• Improve source",
			],
		},
		{
			build: "5.0 ",
			version: "Android 11 beta1",
			config: [
				"• Bring up new minimalist UI with great User experience combined with legacy ancientUI 3.0 on Android 11",
				"• Added moar custom customization for ancientOS with megalithXI inside.",
			],
		},
		{
			build: "4.0 ",
			version: "Android 10 Final",
			config: [
				"• Sept security patch",
				"• Improve Doze",
				"• Improve UI",
				"• Improve qstile and icon primary",
				"• Add VOOC charging support",
				"• Add screen off FOD",
				"• Add Realme recog FP animation",
				"• Add Realme green FOD pressed",
				"• Add ambient display battery toggle",
				"• Add Miui volume dialog",
				"• Add lockscreen clock animation",
				"• Add navbar custom",
				"• Add background merge for qs and notif",
				"• Add screen stabilization",
				"• Add touch respone optimizations",
				"• Add Clipboard toast like ios",
				"• Add support lineage power HAL",
				"• Add square switch",
				"• Add more systembar",
				"• Add notification count",
				"• Add land dimensions",
				"• Add more AncientStyle",
				"• Add settings animation",
				"• Update QuickStep",
				"• Update Dialer",
				"• Update Widget",
				"• More",
			],
		},
	];
	const [expanded, setExpanded] = React.useState("panel1");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		// style={{ maxWidth: "1px", paddingLeft: '0px', paddingRight: '0px' }}
		<React.Fragment>
			<Box
				sx={{
					minHeight: "100vh",
				}}
			>
				<Heading pri="Change Logs" sub="These are all Builds versions" />

				<Box
					sx={{
						dispay: "flex",
						flexDirection: "column",
						flexWrap: "wrap",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Timeline>
						{update.map((data, index) => (
							<TimelineItem
								key={index}
								data-aos="fade-up"
								data-aos-duration="600"
							>
								<TimelineOppositeContent
									variant="body2"
									style={{
										// fontSize: 20,
										mt: 2,
										flex: 0.1,
									}}
								>
									{" "}
									{data.build}
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineDot />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography variant="body2" color="text.secondary">
										{" "}
										<AndroidRoundedIcon
											sx={{
												pt: 1.5,
											}}
										/>{" "}
										{data.version}
									</Typography>

									<div>
										<Accordion
											sx={{
												mt: 2,
												mb: 1,
												borderRadius: 5,
												backgroundColor: "transparent",
												background:
													"linear-gradient(to left, #c14d6431, #4359c632)",
											}}
											expanded={expanded === `panel+${index}`}
											onChange={handleChange(`panel+${index}`)}
										>
											<AccordionSummary
												aria-controls="panel1d-content"
												id="panel1d-header"
											>
												<Typography sx={{ pl: 3 }}>
													Source Change Logs
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													variant="overline"
													style={{
														// fontSize: 12,
														display: "block",
														whiteSpace: "pre-wrap",
														margin: "1em 0",
													}}
												>
													{data.config.map((data) => data + "\n")}
												</Typography>
											</AccordionDetails>
										</Accordion>
									</div>
									{/* <Typography
									variant="caption"
									sx={{ m: 2 }}
									color="text.secondary"
								>
									Updated Date {data.date}
								</Typography> */}
								</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
				</Box>
				<GoBack props="/" />
			</Box>
		</React.Fragment>
	);
}
