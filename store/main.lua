local uis = game:GetService("UserInputService")
local lp = game:GetService("LocalPlayer").LocalPlayer
local function player()
  local target = nil
  local dist = math.huge
  
  for i, v in pairs(game:GetService("Players"):GetPlayers()) do
      if v.Name ~= lp.Name then
          if v.Character and v.Character:FindFirstChild("Head") and v.Character.Humanoid.Health > 0 and v.Character:FindFirstChild("Head") and v.TeamColor ~= lp.TeamColor then
              local magnitude = (v.Character.HumanoidRootPart.Position - lp.Character.HumanoidRootPart.Position).magnitude

              if magnitude < dist then
                  target = v
                  dist = magnitude
              end
      end   end 
  end
  
  return target
end
