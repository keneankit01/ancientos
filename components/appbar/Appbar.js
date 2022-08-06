import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";
import { Global } from "@emotion/react";
import Link from "next/link";
import { filledInputClasses, SwipeableDrawer } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";

const Appbar = () => {
	////////////////////////////////////////////
	const link = ["download", "Updates", "Team", "Donation", "Screenshot"];
	////////////////////////////////////////////
	const linkInfo = [
		"Downloads builds",
		"Check latest updates.",
		"All team Members.",
		"Consider Supporting Us.",
		"Check Screenshots & donate",
	];

	//account link
	const handleOpenUserMenu = () => {
		console.log("first");
	};
	//drawer styling
	const drawerBleeding = 0;
	const Root = styled("div")(({ theme }) => ({
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		height: "100%",

		// 	theme.palette.mode === "dark"
		// 		? grey[900]
		// 		: theme.palette.background.default,
	}));
	const StyledBox = styled(Box)(({ theme }) => ({
		// backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[900],
	}));
	const Puller = styled(Box)(({ theme }) => ({
		width: 100,
		height: 5,
		backgroundColor: theme.palette.mode === "dark" ? grey[400] : grey[600],
		borderRadius: 3,
		position: "absolute",
		top: 10,
		left: "calc(50% - 50px)",
	}));
	// const { window } = props;
	const [open, setOpen] = useState(false);

	return (
		<AppBar
			sx={{
				backgroundColor: "transparent",
				backdropFilter: "blur(10px)",
				// overflow: "visible",
				boxShadow: 3,
				borderBottomLeftRadius: 15,
				borderBottomRightRadius: 15,
			}}
			elevation={0}
			position="fixed"
		>
			<Container
				maxWidth="xl"
				data-aos="fade-down"
				data-aos-duration="600"
				data-aos-anchor-placement="top-bottom"
			>
				<Toolbar disableGutters>
					<Box
						noWrap
						center
						sx={{
							mr: 1,
							display: {
								xs: "none",
								md: "flex",
								justifyContent: "center",
								align: "center",
							},
						}}
					>
						<Link href={"/"}>
							<Typography
								style={{
									background: "linear-gradient(to left, #e1244a, #3851d0)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									BoxShadow: 5,
									fontWeightLight: 200,
									fontWeightRegular: 200,
									fontWeightMedium: 400,
									fontWeightBold: 500,
									fontSize: 30,
									fontFamily: "Poppins",
									textDecoration: "none",
									cursor: "pointer",
								}}
							>
								AncientOS
							</Typography>
						</Link>
					</Box>
					<Tooltip title="Click to Menu">
						<Box
							sx={{
								// mr: 5,
								flexGrow: 0.5,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={() => setOpen(true)}
								color="inherit"
							>
								<ExpandCircleDownRoundedIcon fontSize="large" />
							</IconButton>
						</Box>
					</Tooltip>
					{/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
					<Box
						noWrap
						sx={{ m: 0, display: { xs: "flex", md: "none" }, flexGrow: 1 }}
					>
						{" "}
						<Link href={"/"} passHref>
							<Typography
								style={{
									display: "flex",
									background: "linear-gradient(to left, #e1244a, #3851d0)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									fontWeightLight: 100,
									fontWeightRegular: 200,
									fontWeightMedium: 400,
									fontWeightBold: 800,
									fontSize: 40,
									fontFamily: "Poppins",
									textDecoration: "none",
								}}
							>
								AncientOS
							</Typography>
						</Link>
					</Box>
					<Box
						sx={{
							mr: 10,
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
						}}
					>
						{link.map((links, index) => (
							<MenuItem key={index}>
								<Link key={index} href={`/${links}`}>
									<Typography
										key={index}
										sx={{
											borderRadius: 3,
											TextShadow: 15,
											textTransform: "capitalize",
										}}
										textAlign="center"
									>
										{links}
									</Typography>
								</Link>
							</MenuItem>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<Link href={"/account"}>
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{ borderRadius: 10, boxShadow: 0 }}
								>
									<Avatar
										alt=""
										src="https://avatars.githubusercontent.com/u/58130857?v=4"
									/>
								</IconButton>
							</Link>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
			<Root>
				<CssBaseline />
				<Global
					styles={{
						".MuiDrawer-root > .MuiPaper-root": {
							backgroundColor: "transparent",
							backdropFilter: "blur(15px)",
							overflow: "visible",
							variant: "outlined",
							background: " #24212122",
							background: "linear-gradient(to left, #8f45544a, #3d498358)",
							borderTopLeftRadius: 30,
							borderTopRightRadius: 30,
							elevation: 0,
							square: false,
						},
					}}
				/>

				<SwipeableDrawer
					data-aos="fade-up"
					data-aos-duration="600"
					anchor="bottom"
					open={open}
					onOpen={() => {}}
					onClose={() => setOpen(false)}
					sx={{
						borderRadius: 25,
						overflow: "visible",
						variant: "outlined",
						elevation: 0,
						square: false,
					}}
				>
					<Box
						sx={{
							m: 2,
						}}
					>
						<StyledBox
							sx={{
								// zIndex: 1100,
								position: "absolute",
								top: -drawerBleeding,
								visibility: "visible",
								right: 0,
								left: 0,
							}}
						>
							<Puller />
						</StyledBox>
					</Box>
					<Grid item xs={10} md={6}>
						<Typography align="center" variant="h6">
							Menu
						</Typography>

						<List sx={{ mr: 2 }}>
							{/* Mobile  */}
							{link.map((val, index) => (
								<Link key={index} href={`/${val}`}>
									<ListItem
										sx={{
											m: 1,
											mb: 2,
											borderRadius: 5,
											boxShadow: 5,
											textTransform: "capitalize",
											background:
												"linear-gradient(to left, #c14d647c, #4358c686)",
											backgroundColor: "#4a43457b",
										}}
										onClick={() => setOpen(false)}
									>
										<ListItemText
											primary={
												<Typography
													style={{
														background:
															"linear-gradient(to left, #ffffff, #ffffff)",
														WebkitBackgroundClip: "text",
														WebkitTextFillColor: "transparent",
														color: "#fff",
													}}
													variant="h6"
												>
													{val}
												</Typography>
											}
											secondary={linkInfo[index]}
										/>

										<ListItemIcon>
											<ArrowCircleRightRoundedIcon
												sx={{
													p: 1,
													boxShadow: 5,
													fontSize: 50,
													background:
														"linear-gradient(to left, #c14d64cd, #4359c6c1)",
													backgroundColor: "#c14d647c",
													borderRadius: 10,
												}}
											/>
										</ListItemIcon>
									</ListItem>
								</Link>
							))}
						</List>
					</Grid>
					<Typography sx={{ pt: 0, p: 2 }} align="center" variant="caption">
						Swipe down to exit.
					</Typography>
				</SwipeableDrawer>
			</Root>
		</AppBar>
	);
};
export default Appbar;
