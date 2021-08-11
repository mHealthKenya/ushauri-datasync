const {User} = require("../models_generated/tbl_users");
const {Clients} = require("../models_generated/tbl_client");
const {Appointments} = require("../models_generated/tbl_appointment");

const {UserFaces} = require("../models_faces/tbl_users");
const {ClientsFaces} = require("../models_faces/tbl_client");
const {AppointmentsFace} = require("../models_faces/tbl_appointment");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const express = require("express");
const router = express.Router();

const _ = require("lodash");
const moment = require("moment");

async function syncUsers() {
    try {
        let max_exisiting_user = await UserFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0
        // console.log(max_exisiting_user.dataValues.id)

        let users = await User.findAll({
            where:
                {
                    partner_id: 18,
                    id: {
                        [Op.gte]: max_exisiting_user.dataValues.id
                    }
                }
        })
        for (let i = 0; i < users.length; i++) {
            let userFaces = await UserFaces.findOne({where: {id: users[i].id}});
            if (!userFaces) {
                console.log("Inserting new User...")
                await UserFaces.create(users[i]).then((res) => console.log(res)).catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            }
        }
        let updates_users = await User.findAll({
            where: {
                partner_id: 18,
                updated_at: {
                    [Op.gte]: moment().subtract(2, 'days').format("YYYY-MM-DD")
                }
            }
        });
        for (let i = 0; i < updates_users.length; i++) {
            let FoundUsers = await UserFaces.findOne({where: {id: updates_users[i].id}});
            if (FoundUsers) {
                console.log("Updating existing User...")
                await UserFaces.update(updates_users[i], {where: {id: updates_users[i].id}}).then((res) => console.log(res)).catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            } else {
                console.log('wrong path')
                await UserFaces.create(updates_users[i]).then((res) => console.log(res)).catch((err) => console.log(err));

            }
        }
        // $end_time = Carbon::now();

        // $this->send_email($start_time, $end_time, $users->count() + $updates_users->count() . " Users", $a_number . " Users", "Users sync");
        return true
    } catch (err) {
        console.log(err.message)
    }
}

function sync_care_giver() {

}

async function syncClients() {
    try {
        let max_existing_client = await ClientsFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0
        // console.log(max_exisiting_user.dataValues.id)

        let clients = await Clients.findAll({
            where:
                {
                    partner_id: 18,
                    id: {
                        [Op.gte]: max_existing_client.dataValues.id
                    }
                }
        })
        for (let i = 0; i < clients.length; i++) {
            let clientFaces = await ClientsFaces.findOne({where: {id: clients[i].id}});
            if (!clientFaces) {
                console.log(`Inserting new Client...${clientFaces}`)
                await ClientsFaces.create(clients[i].dataValues).then((res) => console.log(res)).catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            }
        }
        let updates_clients = await Clients.findAll({
            where: {
                partner_id: 18,
                updated_at: {
                    [Op.gte]: moment().subtract(2, 'days').format("YYYY-MM-DD")
                }
            }
        });
        for (let i = 0; i < updates_clients.length; i++) {
            let FoundClient = await ClientsFaces.findOne({where: {id: updates_clients[i].id}});
            if (FoundClient) {
                console.log("Updating existing Client")
                console.log(updates_clients[i].dataValues)
                await ClientsFaces.update(updates_clients[i].dataValues, {where: {id: updates_clients[i].dataValues.id}})
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            } else {
                console.log('wrong path')
                await ClientsFaces.create(updates_clients[i].dataValues)
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
            }
        }
        // $end_time = Carbon::now();

        // $this->send_email($start_time, $end_time, $users->count() + $updates_users->count() . " Users", $a_number . " Users", "Users sync");
        return true
    } catch (e) {
        console.log(e)
    }

}

function syncAppointments() {

}

function syncPMTCT() {

}

function sync_dfc() {

}

function syncClientOutcomes() {

}

function syncOtherAppType() {

}

function syncTransitClients() {

}

router.get("/", async (req, res) => {
    await syncUsers();
    sync_care_giver();
    syncClients();
    syncAppointments();
    syncPMTCT();
    sync_dfc();
    syncClientOutcomes();
    syncOtherAppType();
    // $this->syncOtherFnlOutcome();t
    // $this->syncBroadcast();t
    // $this->syncSmsQueue();t
    syncTransitClients();
    // $this->syncUserOutgoing();t

    //$this->syncClientOutgoing();t
});


module.exports = router;
