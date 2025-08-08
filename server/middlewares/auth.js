import { clerkClient } from "@clerk/express";

//Middleware to check user id and hasPremiumPlan

export const auth = async (req, res, next) => {
    try {
        const {userId,has} = await req.auth();
        const hasPremiumPlan = await has({plan: 'premium'});
        const user = await clerkClient.users
        .getUser(userId);

        if (!hasPremiumPlan && user.privateMetadata.free_usage) {
        req.free_usage = user.privateMetadata.freeUsage;
        } else {
            await clerkClient.users.updateUser(userId, {
                privateMetadata: {
                freeUsage: 0
                }
            });
            req.free_usage=0;
        }
        req.plan = hasPremiumPlan ? 'premium': 'free';
        next()
    } catch (error) {
        console.error(err);
        res.json({
            success:false, message : error.message
        });
    }
};