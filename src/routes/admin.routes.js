import { Router } from "express";
import express from "express";
import { verifyJWT } from "../middleware/auth.js"
import { handleContactForms, downloadIndustryWiseReports } from "../controller/admin.controller.js";

const app = express();
const router = Router();

app.use(express.static('../'));
app.use('/admin', router)

router.route('/').post(verifyJWT , (_, res) => {
    res.status(200).json({ message: "Verified successfully" })
});
router.route('/contactForms').post(handleContactForms);
router.route('/downloadIndustryWiseReports').get(downloadIndustryWiseReports);

export default router;