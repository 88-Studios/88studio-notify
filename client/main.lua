function SendNotify(title, message, time, type)
	SendNUIMessage({
		action = 'open_notify',
		title = title,
        message = message,
        time = time,
		type = type,
	})
end

exports("SendNotify", SendNotify)

RegisterNetEvent('88studio-notify:client:sendNotify')
AddEventHandler('88studio-notify:client:sendNotify', function(title, message, time, type)
	SendAlert(title, message, time, type)
end)