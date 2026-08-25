const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
  createAccountController,
  getUserAccountController,
  getUserBalanceController,
} = require("../controllers/account.controller");

const router = express.Router();

/**
 * - POST /api/accounts/
 * - Create a new account
 * - Protected Route
 */
router.post("/", authMiddleware.authMiddleware, createAccountController);

/**
 * - GET /api/accounts/
 * - Get all accounts of logged-in user
 * - Protected Route
 */
router.get("/", authMiddleware.authMiddleware, getUserAccountController);

/**
 * - GET /api/accounts/balance/:accountId
 * - Get balance for account of logged-in user
 * - Protected Route
 */

router.get(
  "/balance/:accountId",
  authMiddleware.authMiddleware,
  getUserBalanceController,
);
module.exports = router;
