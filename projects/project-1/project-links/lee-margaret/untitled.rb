class Minion 
	attr_accessor :name

	@@minions = []

	def initialize(name)
		@name = name
		@@minions.push(self)
	end

	def self.minions
		@@minions
	end

	def self.say_name
		@@minions.each do |minion|
			puts minion.name
		end
	end
end

Minion.minions

